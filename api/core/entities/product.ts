export type Unit = 'unit' | 'hr' | 'day' | 'month' | 'year' | 'kg' | 'pair'

export interface Product {
  id: string
  name: string
  unit: Unit
  unitPriceExclTax: number
  taxRate: number
}
