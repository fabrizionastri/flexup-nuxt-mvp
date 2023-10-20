import { Order } from 'entities/order'
import { OrderAdapter } from '../interfaces'

import axios from './myAxios'

export const createOrderAdapter = (accountId: string): OrderAdapter => {
  const getAll = async (): Promise<Order[]> => {
    const clientOrders = (await axios.get<Order[]>(`/order?clientAccountId=${accountId}`)) ?? []
    const supplierOrders = (await axios.get<Order[]>(`/order?supplierAccountId=${accountId}`)) ?? []
    // console.log('clientOrders', clientOrders)
    // console.log('supplierOrders', supplierOrders)
    return [...clientOrders, ...supplierOrders]
  }
  const getById = async (orderId: string): Promise<Order | undefined> => {
    const result = (await getAll()) ?? []
    return result.find((order) => order.id === orderId)
  }
  const getByProperty = async (property: keyof Order, value: unknown): Promise<Order[]> => {
    const result = (await getAll()) ?? []
    return result.filter((order) => order[property] === value)
  }

  return {
    getAll,
    getById,
    getByProperty
  }
}
