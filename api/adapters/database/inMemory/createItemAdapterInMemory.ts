import { ItemAdapter } from '../interfaces'
import { itemDatas } from 'db/inMemory'
import { ItemData } from 'entities/item'

export const createItemAdapterInMemory = (): ItemAdapter => {
  const items: ItemData[] = [...itemDatas]
  const getById = (itemId: string) =>
    Promise.resolve(items.find((item) => item.id === itemId))
  const getByOrderId = (orderId: string) =>
    Promise.resolve(items.filter((item) => item.orderId === orderId))
  return {
    getById,
    getByOrderId
  }
}
