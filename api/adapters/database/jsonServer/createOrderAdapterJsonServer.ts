import { OrderData } from 'entities/order'

import { OrderAdapter } from '../adapterInterfaces'
import axios from './myAxios'

export const createOrderAdapterJsonServer = (accountId: string): OrderAdapter => {
  const getAll = async (): Promise<OrderData[]> => {
    const clientOrders = (await axios.get<OrderData[]>(`/order?clientId=${accountId}`)) ?? []
    const supplierOrders = (await axios.get<OrderData[]>(`/order?supplierId=${accountId}`)) ?? []
    // console.log('clientOrders', clientOrders)
    // console.log('supplierOrders', supplierOrders)
    return [...clientOrders, ...supplierOrders]
  }
  const getById = async (orderId: string): Promise<OrderData | undefined> => {
    const result = (await getAll()) ?? []
    return result.find((order) => order.id === orderId)
  }
  return {
    getAll,
    getById
  }
}
