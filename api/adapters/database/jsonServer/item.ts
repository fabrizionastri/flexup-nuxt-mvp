import type { ItemData } from 'entities/item'
import type { ItemAdapter } from '../interfaces'
import axios from './myAxios'

export const createItemAdapter = (): ItemAdapter => {
  const getById = async (id: string): Promise<ItemData | undefined> => {
    const result = await axios.get<ItemData>(`/item/${id}`)
    // console.log('createItemAdapter.ts / result', result)
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

export const itemAdapter = createItemAdapter()
