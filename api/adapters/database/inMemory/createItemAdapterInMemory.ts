import { itemDatas } from 'mock/inMemory'
import { ItemData } from 'entities/item'

import { ItemAdapter } from '../adapterInterfaces'

export const createItemAdapterInMemory = (): ItemAdapter => {
  const items: ItemData[] = [...itemDatas]
  const getById = (itemId: string) => Promise.resolve(items.find((item) => item.id === itemId))
  const getByOrderId = (orderId: string) =>
    Promise.resolve(items.filter((item) => item.orderId === orderId))
  const getByOrderIds = (orderIds: string[]) =>
    Promise.resolve(items.filter((item) => orderIds.includes(item.orderId)))
  return {
    getById,
    getByOrderId,
    getByOrderIds
  }
}
