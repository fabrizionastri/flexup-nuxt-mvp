import { computeItem } from '../usecases/computeItem'
import { createItemAdapter, createOrderAdapter, createTrancheAdapter } from 'adapters/database'
import { TrancheAdapter } from 'adapters/database/interfaces'

import { OrderData, Order } from 'entities/order'
import { createTrancheGateway } from './trancheGateway'
import { createItemGateway } from 'gateways/itemGateway'
import { round6 } from 'utils/round'

export interface OrderGateway {
  // // The "Data" functions should probably only be used internally, and not made public
  // getAllData: () => Promise<OrderData[]>
  // getByIdData: (orderId: string) => Promise<OrderData | undefined>
  getAll: () => Promise<Order[]>
  getById: (orderId: string) => Promise<Order | undefined>
  getByProperty: (property: keyof OrderData, value: unknown) => Promise<Order[]>
}

export const computeOrderWithItems = async (order: OrderData): Promise<Order> => {
  const itemAdapter = createItemAdapter()
  // console.log('orderGateway.ts - itemAdapter:', itemAdapter)
  const itemGateway = createItemGateway(itemAdapter)
  const itemDatas = await itemGateway.getByOrderId(order.id)
  const items = itemDatas.map(computeItem)

  const amountExclTax = round6(items.reduce((sum, item) => sum + item.amountExclTax, 0))
  const taxAmount = round6(items.reduce((sum, item) => sum + item.amountExclTax * item.taxRate, 0))
  const amountInclTax = round6(amountExclTax + taxAmount)
  const averageTaxRate = amountExclTax ? round6(taxAmount / amountExclTax) : 0
  if (amountExclTax) order.principal = amountInclTax

  return {
    ...order,
    items,
    amountExclTax,
    amountInclTax,
    taxAmount,
    averageTaxRate,
    tranches: []
  }
}

export const computeOrder = async (
  order: OrderData,
  trancheAdapter: TrancheAdapter
): Promise<Order> => {
  const orderWithItems = await computeOrderWithItems(order)
  const trancheGateway = createTrancheGateway(trancheAdapter)
  const tranches = await trancheGateway.getByOrder(orderWithItems)

  return {
    ...orderWithItems,
    tranches
  }
}

export const createOrderGateway = (accountId: string): OrderGateway => {
  const trancheAdapter = createTrancheAdapter()
  const orderAdapter = createOrderAdapter(accountId)

  // const itemAdapter = createItemAdapterInMemory()
  // console.log('orderGateway.ts - itemAdapter:', itemAdapter)
  // console.log('orderGateway.ts - orderAdapter:', orderAdapter)

  //   const getAllData = async (): Promise<OrderData[]> => (await orderAdapter.getAll()) ?? []
  //
  //   const getByIdData = async (orderId: string): Promise<OrderData | undefined> =>
  //     await orderAdapter.getById(orderId)

  const getAll = async (): Promise<Order[]> => {
    const orderDatas = await orderAdapter.getAll()
    const orders = await Promise.all(orderDatas.map(computeOrder))
    return orders
  }

  const getById = async (orderId: string): Promise<Order | undefined> => {
    const order = await orderAdapter.getById(orderId)
    if (order) {
      return computeOrder(order, trancheAdapter)
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
