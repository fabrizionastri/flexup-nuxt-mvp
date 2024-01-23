import { Order } from 'lib/entities'
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
export type OrderConfirmationStatus =
  | 'draft'
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'rejected'
  | 'retracted'
export type OrderDateType = 'confirmation' | 'deliveryStart' | 'deliveryFinish'
export type OrderDate = { orderDateType: OrderDateType; date: Date }

// export interface OrderData {
export interface Order extends Entity {
  // database values
  id: string
  clientAccountId: string
  supplierAccountId: string
  nature: OrderNature | undefined
  currency: CurrencyId
  country: CountryId
  amountExclTax?: number
  amountInclTax?: number // this is the order "principal" amount, used to compute the tranches
  name?: string
  contractId?: string // if the order is part of a contract
  charterId?: string // if the order is subject to a charter
  // calculated values → transfor to getter methods
  taxAmount?: number // calculated from amountExclTax and amountInclTax
  averageTaxRate?: number // calculated from taxAmount and amountExclTax
  items?: ItemComputed[]
  tranches?: Tranche[]
  dates: OrderDate[]
  // ...
  confirmationStatus?: OrderConfirmationStatus
  createdByMemberId?: string
}

// export interface OrderNew extends OrderNew {
//   amountExclTax?: number | undefined | null
//   amountInclTax?: number | undefined | null
//   taxAmount?: number | undefined | null
//   averageTaxRate?: number | undefined | null
// items: Item[]
// tranches: Tranche[]
// }
