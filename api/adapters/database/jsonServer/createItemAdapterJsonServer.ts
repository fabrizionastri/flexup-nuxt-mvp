import { ItemAdapter } from '../interfaces'
import { ItemData } from 'entities/item'

import axios from './myAxios'

export const createItemAdapterJsonServer = (): ItemAdapter => {
  return {
    getById: async (id: string): Promise<ItemData | undefined> => {
      const result = await axios.get<ItemData>(`/item/${id}`)
      // console.log('createItemAdapterJsonServer.ts / result', result)
      return result
      // TODO: return result.data -> ce serait plus propre et cohérent avec le retour naturel de axios.get, mais ça demande de modifier le myAxios.ts
    },
    getByOrderId: async (orderId: string): Promise<ItemData[]> => {
      const result = (await axios.get<ItemData[]>(`/item?orderId=${orderId}`)) ?? []
      return result
    }
  }
}
