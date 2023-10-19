import { items } from './../../../_docs/_archives/devUtils/computeEntities'
import { Item } from 'entities/item'
import { computeItem } from '../usecases/computeItem'
import { createItemAdapter, createOrderAdapter, createTrancheAdapter } from 'adapters/database'
import { ItemAdapter, OrderAdapter, TrancheAdapter } from 'adapters/database/interfaces'
import { itemGateway } from 'gateways/itemGateway'
import { trancheGateway } from './trancheGateway'
import { OrderData, Order } from 'entities/order'
import { createTrancheGateway } from './trancheGateway'
import { createItemGateway } from 'gateways/itemGateway'
import { round6 } from 'utils/round'

export interface OrderGateway {
  getAll: () => Promise<Order[]>
  getById: (orderId: string) => Promise<Order | undefined>
  getByProperty: (property: keyof OrderData, value: unknown) => Promise<Order[]>
}

export const sumPropertyStrict = (property: string, items: any): number | undefined => {
  if (items.length === 0) return undefined
  // if any item has no amountExclTax (ie: missing property, or value is null or undefined), then return undefined
  // if (items.some(item => item.amountExclTax === undefined)) return undefined
  if (items.some((item: any) => item.amountExclTax === undefined || item.amountExclTax === null))
    return undefined

  const sum = round6(items.reduce((sum: number, item: any) => sum + item.amountExclTax, 0))
  if (sum === 0) return undefined
  return sum
}

export const sumAmountExclTax = (items: Item[]) => sumPropertyStrict('amountExclTax', items)

// export const sumTaxAmount = (items: Item[]): number =>
//   round6(items.reduce((sum, item) => sum + item.amountExclTax * item.taxRate, 0))

export const computeOrderAmounts = (
  items: Item[]
): {
  amountExclTax: number | undefined | null
  amountInclTax: number | undefined | null
  taxAmount: number | undefined | null
  averageTaxRate: number | undefined | null
} => {
  const amountExclTax = sumPropertyStrict('amountExclTax', items)
  if (amountExclTax === undefined)
    throw new Error('Order total amount excluding tax is undefined. Please check your order items.')
  const amountInclTax = sumPropertyStrict('amountInclTax', items)
  if (amountInclTax === undefined)
    throw new Error('Order total amount including tax is undefined. Please check your order items.')
  const taxAmount = amountInclTax - amountExclTax
  const averageTaxRate = amountExclTax ? round6(taxAmount / amountExclTax) : 0
  if (!amountExclTax || !amountInclTax)
    throw new Error('Order total amount is 0 or undefined. Please check your order items.')
  return {
    amountExclTax,
    amountInclTax,
    taxAmount,
    averageTaxRate
  }
}

export const computeOrder = async (orderData: OrderData): Promise<Order> => {
  const items = await itemGateway.getByOrderId(orderData.id)
  const orderAmounts = computeOrderAmounts(items)
  const computedOrder = await addItemsToOrder(order)
  // const trancheGateway = await createTrancheGateway(trancheAdapter)
  const tranches = await trancheGateway.getByOrder(orderWithItems)

  return {
    ...orderWithItems,
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

    if (order) {
      return computeOrder(order)
    }
    return undefined
  }

  const getByProperty = async (property: keyof OrderData, value: unknown): Promise<Order[]> => {
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
