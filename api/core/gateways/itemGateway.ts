import { Item, ItemData } from 'entities/item'
import { ItemAdapter } from 'adapters/database/interfaces'
import { computeItem } from 'usecases/computeItem'

export interface ItemGateway {
  // getByIdData: (itemId: string) => Promise<ItemData | undefined>
  // getByOrderIdData: (orderId: string) => Promise<ItemData[]>
  getById: (itemId: string) => Promise<Item | undefined>
  getByOrderId: (orderId: string) => Promise<Item[]>
  getByProperty: (property: keyof ItemData, value: unknown) => Promise<Item[]>
}

export const createItemGateway = (adapter: ItemAdapter): ItemGateway => {
  // const getByIdData = async (itemId: string): Promise<ItemData | undefined> =>
  //   await adapter.getById(itemId)
  // const getByOrderIdData = async (orderId: string): Promise<ItemData[]> =>
  //   await adapter.getByOrderId(orderId)
  const getById = async (itemId: string): Promise<Item | undefined> => {
    const item = await adapter.getById(itemId)
    return item !== undefined ? computeItem(item) : undefined
  }
  const getByOrderId = async (orderId: string): Promise<Item[]> =>
    ((await adapter.getByOrderId(orderId)) ?? []).map(computeItem)

  // ToDo : peut-on faire une recherche sur des propriétés calculées ? Il faudrait calculer tous les items avant de faire la recherche ...
  const getByProperty = async (property: keyof ItemData, value: unknown): Promise<Item[]> =>
    ((await adapter.getByProperty(property, value)) ?? []).map(computeItem)

  return {
    // getByIdData,
    // getByOrderIdData,
    getById,
    getByOrderId,
    getByProperty
  }
}
