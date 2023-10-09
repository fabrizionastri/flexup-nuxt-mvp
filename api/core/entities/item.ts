export interface ItemData {
  id: string
  orderId: string
  name: string
  quantity: number
  unit: string
  unitPriceExclTax: number
  taxRate: number
}

export interface Item extends ItemData {
  unitPriceInclTax: number
  amountExclTax: number
  amountInclTax: number
  taxAmount: number
}
