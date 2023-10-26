import type { Entity } from '.'
import type { Unit } from './unit'

export interface ItemData extends Entity {
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
