import type { Entity, CountryId, CurrencyId, Tranche, ItemComputed } from '.'

/* Questions:
- should we store the compute functions in the gateway, entity, use case or utils ?
- risk of circular references if we need the order to compute the tranche, and we need the tranche to compute the order ???
*/

export const OrderNaturePortionsTotal = {
  commercial: 1,
  financial: 0,
  donation: -1
} as const

export type OrderNature = keyof typeof OrderNaturePortionsTotal

export type OrderDateType = 'confirmation' | 'deliveryStart' | 'deliveryFinish'
export type OrderDate = { orderDateType: OrderDateType; date: Date }

// export interface OrderData {
export interface Order extends Entity {
  // database values
  id: string
  clientAccountId: string
  supplierAccountId: string
  nature: OrderNature | undefined
  currency?: CurrencyId
  country?: CountryId
  // calculated values → transfor to getter methods
  name?: string
  amountInclTax?: number
  amountExclTax?: number
  taxAmount?: number
  averageTaxRate?: number
  items?: ItemComputed[]
  tranches?: Tranche[]
  // ...
  // contractId: string
  // dates: OrderDate[]
  // status: OrderStatus
}

// export interface OrderNew extends OrderNew {
//   amountExclTax?: number | undefined | null
//   amountInclTax?: number | undefined | null
//   taxAmount?: number | undefined | null
//   averageTaxRate?: number | undefined | null
// items: Item[]
// tranches: Tranche[]
// }
