import type { Item, ItemData } from 'entities/item'
import { round6 } from 'utils/round'
import { itemAdapter } from '../adapters/database'

/* TOCHECK : defining gateway interfaces it useless when there is only one */
// export interface ItemGateway {
//   getById: (itemId: string) => Promise<Item | undefined>
//   getByOrderId: (orderId: string) => Promise<Item[]>
//   getByProperty: (property: keyof ItemData, value: unknown) => Promise<Item[]>
// }

export const computeItem = (item: ItemData): Item => {
  return {
    ...item,
    unitPriceInclTax: round6(item.unitPriceExclTax * (1 + item.taxRate)),
    amountExclTax: round6(item.quantity * item.unitPriceExclTax),
    taxAmount: round6(item.quantity * item.unitPriceExclTax * item.taxRate),
    amountInclTax: round6(item.quantity * item.unitPriceExclTax * (1 + item.taxRate))
  }
}

export const createItemGateway = () /* : ItemGateway */ => {
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

export const itemGateway = createItemGateway()
