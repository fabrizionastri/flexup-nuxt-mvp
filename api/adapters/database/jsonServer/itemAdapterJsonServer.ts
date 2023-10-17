import { ItemData } from 'entities/item'
import { ItemAdapter } from '../interfaces'
import axios from './myAxios'

export const createItemAdapterJsonServer = (): ItemAdapter => {
  return {
    getById: async (id: string): Promise<ItemData | undefined> => {
      const result = await axios.get<ItemData>(`/item/${id}`)
      // console.log('createItemAdapterJsonServer.ts / result', result)
      return result
    },
    getByOrderId: async (orderId: string): Promise<ItemData[]> => {
      const result = (await axios.get<ItemData[]>(`/item?orderId=${orderId}`)) ?? []
      return result
    }
  }
}
