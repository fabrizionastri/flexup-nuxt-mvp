import { OrderData } from 'entities/order'

import { inMemory } from 'mock/inMemory'
import { OrderAdapter } from '../adapterInterfaces'

export const createOrderAdapterInMemoryForAccountId = (accountId: string): OrderAdapter => {
  const orders: OrderData[] = [...inMemory.order]
  const getAll = (): Promise<OrderData[]> =>
    Promise.resolve(
      orders.filter((order) => order.clientId === accountId || order.supplierId === accountId)
    )
  const getById = async (orderId: string): Promise<OrderData | undefined> =>
    Promise.resolve((await getAll()).find((order) => order.id === orderId))
  return {
    getAll,
    getById
  }
}
