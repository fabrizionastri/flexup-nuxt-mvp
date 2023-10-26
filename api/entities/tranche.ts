import type { PaymentTerms } from './paymentTerms'

export interface TrancheData {
  id: string // 0, 1, 2, 3 ...
  orderId: string // uuid
  portion: number // -1 <= portion <= 1
  name: string //
  paymentTerms: PaymentTerms // should be move out to the payment termstable
}

export interface Tranche extends TrancheData {
  sign: 1 | -1
  principal: number | undefined
  payorId: string
  payeeId: string
}
