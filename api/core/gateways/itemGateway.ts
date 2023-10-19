import { Item, ItemData } from 'entities/item'
import { ItemAdapter } from 'adapters/database/interfaces'
import { computeItem } from 'usecases/computeItem'
import { createItemAdapter } from 'adapters/database'

export interface ItemGateway {
  getById: (itemId: string) => Promise<Item | undefined>
  getByOrderId: (orderId: string) => Promise<Item[]>
  getByProperty: (property: keyof ItemData, value: unknown) => Promise<Item[]>
}

export const createItemGateway = (itemAdapter: ItemAdapter): ItemGateway => {
  const getById = async (itemId: string): Promise<Item | undefined> => {
    const item = await itemAdapter.getById(itemId)
    return !item ? undefined : computeItem(item)
  }
  const getByOrderId = async (orderId: string): Promise<Item[]> =>
    ((await itemAdapter.getByOrderId(orderId)) ?? []).map(computeItem)

  // ToDo : peut-on faire une recherche sur des propriétés calculées ? Il faudrait calculer tous les items avant de faire la recherche ...
  const getByProperty = async (property: keyof ItemData, value: unknown): Promise<Item[]> =>
    ((await itemAdapter.getByProperty(property, value)) ?? []).map(computeItem)

  return {
    getById,
    getByOrderId,
    getByProperty
  }
}

export const itemGateway = createItemGateway(createItemAdapter())
