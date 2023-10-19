import { Item } from 'entities/item'
import { Tranche } from './tranche'

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
export interface Order {
  id: string
  clientAccountId: string
  supplierAccountId: string
  nature: OrderNature | undefined
  name?: string
  amountInclTax?: number | undefined | null // this is also referred to as the "principal"
  amountExclTax?: number | undefined | null
  taxAmount?: number | undefined | null
  averageTaxRate?: number | undefined | null
  items?: Item[]
  tranches?: Tranche[]
  // principal: number | undefined | null // null if NULL in DB. undefined if not provided so far in the app
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
