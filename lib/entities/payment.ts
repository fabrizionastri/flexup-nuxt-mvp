import type { Currency, Entity } from '.'

export type PaymentStatus = 'approved' | 'pending' | 'verified' | 'cancelled'
export type SliceType = 'cash' | 'funding'
export type Sign = 1 | -1

export interface PaymentData extends Entity {
  id: string
  status: PaymentStatus
  reference: string
  description?: string
  payorAccountId?: string
  payorWalletId?: string
  payorCurrency?: Currency
  payorDate?: Date
  payorAmount?: number
  payorNote?: string
  payeeAccountId?: string
  payeeWalletId?: string
  payeeCurrency?: Currency
  payeeDate?: Date
  payeeAmount?: number
  payeeNote?: string
}

export interface Payment extends PaymentData {
  payorName: string
  payorSign: Sign
  payorSliceType: SliceType
  payorWalletName: string
  payorWalletOwnerName: string
  payorWalletOwnerId: string
  payeeName: string
  payeeSign: Sign
  payeeSliceType: SliceType
  payeeWalletName: string
  payeeWalletOwnerName: string
  payeeWalletOwnerId: string
  conversionRate: number
}
