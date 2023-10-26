import type { ItemAdapter } from '../interfaces'
import type { ItemData } from 'entities/item'
import { itemDatas } from 'mock/inMemory/item'

export const createItemAdapter = (): ItemAdapter => {
  const items: ItemData[] = itemDatas

  const getById = (itemId: string): Promise<ItemData | undefined> =>
    Promise.resolve(items.find((item) => item.id === itemId))

  const getByOrderId = (orderId: string): Promise<ItemData[]> =>
    Promise.resolve(items.filter((item) => item.orderId === orderId))

  const getByProperty = (property: keyof ItemData, value: unknown): Promise<ItemData[]> => {
    // check if the property exists on the first entity in the list
    if (items.length > 0 && !(property in items[0])) {
      return Promise.reject(new Error(`Property "${property}" does not exist on entity "item"`))
    }
    return Promise.resolve(items.filter((item) => item[property] === value))
  }
  return {
    getById,
    getByOrderId,
    getByProperty
  }
}

export const itemAdapter = createItemAdapter()
