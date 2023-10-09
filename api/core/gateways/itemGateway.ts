import { Item, ItemData } from 'entities/item'
import { ItemAdapter } from 'src/adapters/database/adapterInterfaces'
import { round6 } from 'utils/round'

export const createItemGateway = (adapter: ItemAdapter) => {
  const getByIdData = async (itemId: string): Promise<ItemData | undefined> =>
    await adapter.getById(itemId)
  const getByOrderIdData = async (orderId: string): Promise<ItemData[] | undefined> =>
    await adapter.getByOrderId(orderId)
  const getById = async (itemId: string): Promise<Item | undefined> => {
    const item = await adapter.getById(itemId)
    return item !== undefined ? calculateItem(item) : undefined
  }
  const getByOrderId = async (orderId: string): Promise<Item[] | undefined> =>
    ((await adapter.getByOrderId(orderId)) ?? []).map(calculateItem)

  return {
    getByIdData,
    getByOrderIdData,
    getById,
    getByOrderId
  }
}

function calculateItem(item: ItemData): Item {
  return {
    ...item,
    unitPriceInclTax: round6(item.unitPriceExclTax * (1 + item.taxRate)),
    amountExclTax: round6(item.quantity * item.unitPriceExclTax),
    taxAmount: round6(item.quantity * item.unitPriceExclTax * item.taxRate),
    amountInclTax: round6(item.quantity * item.unitPriceExclTax * (1 + item.taxRate))
  }
}
