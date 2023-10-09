// src/adapters/database/Adapters/jsonServer/item.jsonServer.Adapter.ts
import { ItemData } from 'entities/item'

import { ItemAdapter } from '../adapterInterfaces'
import axios from './myAxios'

export const createItemAdapterJsonServer1 = (): ItemAdapter => {
  const getById = async (id: string): Promise<ItemData | undefined> => {
    const result = await axios.get<ItemData>(`/item/${id}`)
    return result
  }
  const getByOrderId = async (orderId: string): Promise<ItemData[]> => {
    const result = (await axios.get<ItemData[]>(`/item?orderId=${orderId}`)) ?? []
    return result
  }
  const getByOrderIds = async (orderIds: string[]): Promise<ItemData[]> => {
    const result =
      (await axios.get<ItemData[]>(`/item?orderId=${orderIds.join('&orderId=')}`)) ?? []
    return result
  }
  return {
    getById,
    getByOrderId,
    getByOrderIds
  }
}

export const createItemAdapterJsonServer2 = (): ItemAdapter => {
  const getById = (id: string): Promise<ItemData | undefined> => axios.get<ItemData>(`/item/${id}`)

  const getByOrderId = async (orderId: string): Promise<ItemData[]> =>
    axios.get<ItemData[]>(`/item?orderId=${orderId}`).then((response) => response ?? [])

  const getByOrderIds = async (orderIds: string[]): Promise<ItemData[]> =>
    axios
      .get<ItemData[]>(`/item?orderId=${orderIds.join('&orderId=')}`)
      .then((response) => response ?? [])

  return {
    getById,
    getByOrderId,
    getByOrderIds
  }
}

export { createItemAdapterJsonServer2 as createItemAdapterJsonServer }
