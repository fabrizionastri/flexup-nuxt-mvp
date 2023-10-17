import { createTrancheGateway } from './trancheGateway'
import { computeItem } from '../usecases/computeItem'
import { createItemAdapter, createOrderAdapter, createTrancheAdapter } from 'adapters/database'
import { ItemAdapter, TrancheAdapter } from 'adapters/database/interfaces'

import { OrderData, Order } from 'entities/order'
import { createItemGateway } from 'gateways/itemGateway'
import { round6 } from 'utils/round'

export interface OrderGateway {
  getAllData: () => Promise<OrderData[]>
  getByIdData: (orderId: string) => Promise<OrderData | undefined>
  getAll: () => Promise<Order[]>
  getById: (orderId: string) => Promise<Order | undefined>
}

const computeOrderWithItems = async (
  order: OrderData,
  itemAdapter: ItemAdapter
): Promise<Order> => {
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

const computeOrder = async (
  order: OrderData,
  itemAdapter: ItemAdapter,
  trancheAdapter: TrancheAdapter
): Promise<Order> => {
  const orderWithItems = await computeOrderWithItems(order, itemAdapter)
  const trancheGateway = createTrancheGateway(trancheAdapter)
  const tranches = await trancheGateway.getByOrder(orderWithItems)

  return {
    ...orderWithItems,
    tranches
  }
}
export const createOrderGateway = (accountId: string): OrderGateway => {
  const orderAdapter = createOrderAdapter(accountId)
  const itemAdapter = createItemAdapter()
  const trancheAdapter = createTrancheAdapter()

  const getAllData = async (): Promise<OrderData[]> => (await orderAdapter.getAll()) ?? []

  const getByIdData = async (orderId: string): Promise<OrderData | undefined> =>
    await orderAdapter.getById(orderId)

  const getAll = async (): Promise<Order[]> => {
    const orderDatas = await orderAdapter.getAll()
    const orders = await Promise.all(orderDatas.map(computeOrder))
    return orders
  }

  const getById = async (orderId: string): Promise<Order | undefined> => {
    const order = await orderAdapter.getById(orderId)
    if (order) {
      return computeOrder(order, itemAdapter, trancheAdapter)
    }
    return undefined
  }
  return {
    getAllData,
    getByIdData,
    getAll,
    getById
  }
}
