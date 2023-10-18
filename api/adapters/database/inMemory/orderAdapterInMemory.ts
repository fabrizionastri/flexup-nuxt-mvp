import { OrderAdapter } from '../interfaces'
import { allOrderDatas } from 'mock/inMemory'
import { OrderData } from 'entities/order'

export const createOrderAdapterInMemory = (accountId: string): OrderAdapter => {
  const orders: OrderData[] = allOrderDatas

  const getAll = (): Promise<OrderData[]> =>
    Promise.resolve(
      orders.filter(
        (order) => order.clientAccountId === accountId || order.supplierAccountId === accountId
      )
    )

  const getById = (orderId: string): Promise<OrderData | undefined> =>
    getAll().then((myOrders) => myOrders.find((order) => order.id === orderId))

  const getByProperty = (property: keyof OrderData, value: unknown): Promise<OrderData[]> =>
    getAll().then((myOrders) => myOrders.filter((order) => order[property] === value))

  return {
    getAll,
    getById,
    getByProperty
  }
}
