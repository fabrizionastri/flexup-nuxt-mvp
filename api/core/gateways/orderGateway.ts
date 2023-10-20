import { Item } from 'entities/item'
import { createOrderAdapter } from 'adapters/database'
import { itemGateway } from 'gateways/itemGateway'
import { trancheGateway } from './trancheGateway'
import { Order } from 'entities/order'
import { round6 } from 'utils/round'
import { sumPropertyStrict } from 'lib/utils/sumPropertyStrict'

export interface OrderGateway {
  getAll: () => Promise<Order[]>
  getById: (orderId: string) => Promise<Order | undefined>
  getByProperty: (property: keyof Order, value: unknown) => Promise<Order[]>
}

export const computeItemTotals = (
  items: Item[]
):
  | {
      amountExclTax: number
      amountInclTax: number
      taxAmount: number
      averageTaxRate: number
    }
  | undefined => {
  if (items.length === 0) return undefined
  const amountExclTax = sumPropertyStrict<Item>('amountExclTax', items, true)
  const amountInclTax = sumPropertyStrict<Item>('amountInclTax', items, true)
  if (!amountExclTax || !amountInclTax) {
    // TODO : this should throw an error or log something
    // console.log(
    //   `Item total amount for order ${items[0].orderId} is 0 or undefined. Order total has NOT been updated`
    // )
    return undefined
  }
  const taxAmount = round6(amountInclTax - amountExclTax)
  const averageTaxRate = amountExclTax ? round6(taxAmount / amountExclTax) : 0

  const result = {
    amountExclTax,
    amountInclTax,
    taxAmount,
    averageTaxRate
  }
  // console.log(`Item total amount for order ${items[0].orderId} is: `, result)
  return result
}

export const computeOrder = async (order: Order): Promise<Order> => {
  let interimOrder: Order
  // Fetch computed items and add them to the order total amounts
  const items = await itemGateway.getByOrderId(order.id)
  interimOrder = { ...order, items }

  const orderAmounts = computeItemTotals(items)
  // if order amounts are defined, update the order with them, else keep the original values
  if (orderAmounts) interimOrder = { ...interimOrder, ...orderAmounts }

  // Create an intermediary order with computed amounts to pass to computeTranche

  // Fetch and compute tranches using the interim order
  const tranches = await trancheGateway.getByOrder(interimOrder)

  return {
    ...interimOrder,
    tranches
  }
}

export const createOrderGateway = (accountId: string): OrderGateway => {
  const orderAdapter = createOrderAdapter(accountId)
  // const itemGateway = createItemGateway(createItemAdapter())
  // const trancheAdapter = createTrancheAdapter()

  const getAll = async (): Promise<Order[]> => {
    const orderDatas = await orderAdapter.getAll()
    const orders = await Promise.all(orderDatas.map(computeOrder))
    return orders
  }

  const getById = async (orderId: string): Promise<Order | undefined> => {
    const order = await orderAdapter.getById(orderId)
    if (!order) return undefined
    return computeOrder(order)
  }

  const getByProperty = async (property: keyof Order, value: unknown): Promise<Order[]> => {
    const orderDatas = await orderAdapter.getByProperty(property, value)
    const orders = await Promise.all(orderDatas.map(computeOrder))
    return orders
  }

  return {
    getAll,
    getById,
    getByProperty
  }
}
