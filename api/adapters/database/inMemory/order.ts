import { Order } from 'entities/order'
import { OrderAdapter } from '../interfaces'
import { orderDatas } from 'mock/inMemory'

export const createOrderAdapter = (accountId: string): OrderAdapter => {
  const orders: Order[] = orderDatas

  const getAll = (): Promise<Order[]> =>
    Promise.resolve(
      orders.filter(
        (order) => order.clientAccountId === accountId || order.supplierAccountId === accountId
      )
    )

  const getById = (orderId: string): Promise<Order | undefined> =>
    getAll().then((myOrders) => myOrders.find((order) => order.id === orderId))

  const getByProperty = (property: keyof Order, value: unknown): Promise<Order[]> =>
    getAll().then((myOrders) => myOrders.filter((order) => order[property] === value))

  return {
    getAll,
    getById,
    getByProperty
  }
}
