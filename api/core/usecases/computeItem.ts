import { round6 } from 'utils/round'
import { Item, ItemData } from 'entities/item'

export const computeItem = (item: ItemData): Item => {
  return {
    ...item,
    unitPriceInclTax: round6(item.unitPriceExclTax * (1 + item.taxRate)),
    amountExclTax: round6(item.quantity * item.unitPriceExclTax),
    taxAmount: round6(item.quantity * item.unitPriceExclTax * item.taxRate),
    amountInclTax: round6(item.quantity * item.unitPriceExclTax * (1 + item.taxRate))
  }
}
