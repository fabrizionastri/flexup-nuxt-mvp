import { Item, ItemData } from 'entities/item'
import { ItemAdapter } from 'adapters/database/interfaces'
import { computeItem } from '../usecases/computeItem'

export interface ItemGateway {
  getByIdData: (itemId: string) => Promise<ItemData | undefined>
  getByOrderIdData: (orderId: string) => Promise<ItemData[]>
  getById: (itemId: string) => Promise<Item | undefined>
  getByOrderId: (orderId: string) => Promise<Item[]>
}

export const createItemGateway = (adapter: ItemAdapter): ItemGateway => {
  const getByIdData = async (itemId: string): Promise<ItemData | undefined> =>
    await adapter.getById(itemId)
  const getByOrderIdData = async (orderId: string): Promise<ItemData[]> =>
    await adapter.getByOrderId(orderId)
  const getById = async (itemId: string): Promise<Item | undefined> => {
    const item = await adapter.getById(itemId)
    return item !== undefined ? computeItem(item) : undefined
  }
  const getByOrderId = async (orderId: string): Promise<Item[]> =>
    ((await adapter.getByOrderId(orderId)) ?? []).map(computeItem)

  return {
    getByIdData,
    getByOrderIdData,
    getById,
    getByOrderId
  }
}
