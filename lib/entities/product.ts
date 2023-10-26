import type { Entity } from '.'
import type { Unit } from './unit'

export interface Product extends Entity {
  id: string
  name: string
  unit: Unit
  unitPriceExclTax: number
  taxRate: number
}
