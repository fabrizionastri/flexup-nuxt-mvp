import type { Unit } from './unit'

export interface ItemData {
  id: string
  orderId: string
  name: string
  unit: Unit
  quantity: number
  unitPriceExclTax: number
  taxRate: number
}

export interface Item extends ItemData {
  unitPriceInclTax: number
  amountExclTax: number
  amountInclTax: number
  taxAmount: number
}
