import { ItemData } from 'entities/item'
import { ItemAdapter } from '../interfaces'
import axios from './myAxios'

export const createItemAdapterJsonServer = (): ItemAdapter => {
  const getById = async (id: string): Promise<ItemData | undefined> => {
    const result = await axios.get<ItemData>(`/item/${id}`)
    // console.log('createItemAdapterJsonServer.ts / result', result)
    return result
  }
  const getByOrderId = async (orderId: string): Promise<ItemData[]> => {
    const result = (await axios.get<ItemData[]>(`/item?orderId=${orderId}`)) ?? []
    return result
  }
  const getByProperty = async (property: keyof ItemData, value: unknown): Promise<ItemData[]> => {
    const result = (await axios.get<ItemData[]>(`/item?${property}=${value}`)) ?? []
    return result
  }
  return {
    getById,
    getByOrderId,
    getByProperty
  }
}

export const itemAdapterJsonServer = createItemAdapterJsonServer()
export const itemAdapter = createItemAdapterJsonServer()
