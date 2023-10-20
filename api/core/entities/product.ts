import { Unit } from './unit'

export interface Product {
  id: string
  name: string
  unit: Unit
  unitPriceExclTax: number
  taxRate: number
}
