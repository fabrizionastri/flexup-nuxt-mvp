import { OrderAdapter } from '../interfaces'
import { orderDatas } from 'db/inMemory'
import { OrderData } from 'entities/order'

export const createOrderAdapterInMemoryForAccountId = (
  accountId: string
): OrderAdapter => {
  const orders: OrderData[] = [...orderDatas]
  const getAll = (): Promise<OrderData[]> =>
    Promise.resolve(
      orders.filter(
        (order) =>
          order.clientId === accountId || order.supplierId === accountId
      )
    )
  const getById = async (orderId: string): Promise<OrderData | undefined> =>
    Promise.resolve((await getAll()).find((order) => order.id === orderId))
  return {
    getAll,
    getById
  }
}
