import { NavBar } from './../../.nuxt/components.d'
// lib/entities/tranche.ts

// TOCHECK: what is the best way to structure tranches ?

import type { Entity, Order } from '.'
import type { PaymentTerms } from './paymentTerms'

export interface TrancheData extends Entity {
  id: string // 0, 1, 2, 3 ...
  orderId: string // uuid
  portion: number // -1 <= portion <= 1
  paymentTerms: PaymentTerms // should be move out to the payment termstable
}

export interface Tranche extends TrancheData {
  sign: 1 | -1
  principal: number | undefined
  payorId: string
  payeeId: string
  name?: string
}

export interface TrancheWithMethods extends TrancheData {
  sign(): 1 | -1 // = portion / abs(portion)
  principal(): number | undefined // = portion * order.grossAmount
  payorId(): string // if portion > 0, then payorId = order.clientId, else payorId = order.supplierId
  payeeId(): string // if portion > 0, then payeeId = order.supplierId, else payeeId = order.clientId
  name(): string // = portion *100 + "% " + paymentTerms.name
}

// Externalized pure functions
export function calculateSign(portion: number): 1 | -1 {
  return (portion / Math.abs(portion)) as 1 | -1
}

export function calculatePrincipal(portion: number, amountExclTax: number): number | undefined {
  return amountExclTax ? portion * amountExclTax : undefined
}

export function calculatePayorId(
  portion: number,
  clientAccountId: string,
  supplierAccountId: string
): string {
  if (!portion) throw new Error('Portion cannot be 0 or undefined.')
  if (!clientAccountId || !supplierAccountId)
    throw new Error('Supplier and client account must be defined.')
  return portion > 0 ? clientAccountId : supplierAccountId
}

export function calculatePayeeId(
  portion: number,
  clientAccountId: string,
  supplierAccountId: string
): string {
  if (!portion) throw new Error('Portion cannot be 0 or undefined.')
  if (!clientAccountId || !supplierAccountId)
    throw new Error('Supplier and client account must be defined.')
  return portion > 0 ? supplierAccountId : clientAccountId
}

export function calculateName(portion: number, paymentTermsName: string): string {
  return `${portion * 100}% ${paymentTermsName}`
}

// Factory function
export const createTranche = (trancheData: TrancheData, order: Order): TrancheWithMethods => {
  return {
    ...trancheData,
    sign: () => calculateSign(trancheData.portion),
    principal: () => calculatePrincipal(trancheData.portion, order.grossAmount),
    payorId: () =>
      calculatePayorId(trancheData.portion, order.clientAccountId, order.supplierAccountId),
    payeeId: () =>
      calculatePayeeId(trancheData.portion, order.clientAccountId, order.supplierAccountId),
    name: () => calculateName(trancheData.portion, trancheData.paymentTerms.name)
  }
}
