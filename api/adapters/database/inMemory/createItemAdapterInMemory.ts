import { ItemAdapter } from '../interfaces'
import { ItemData } from 'entities/item'

import { itemDatas } from 'mock/inMemory'

export const createItemAdapterInMemory = (): ItemAdapter => {
  const items: ItemData[] = [...itemDatas]
  const getById = (itemId: string): Promise<ItemData | undefined> =>
    Promise.resolve(items.find((item) => item.id === itemId))
  const getByOrderId = (orderId: string): Promise<ItemData[]> =>
    Promise.resolve(items.filter((item) => item.orderId === orderId))
  return {
    getById,
    getByOrderId
  }
}
