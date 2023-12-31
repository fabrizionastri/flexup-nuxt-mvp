import type { Entity } from '.'
import type { CurrencyId } from './currency'

export const ContractNatures = {
  commercial: {
    sumOfPortions: 1,
    clientLabel: 'Client',
    supplierLabel: 'Supplier'
  },
  funding: {
    sumOfPortions: 0,
    clientLabel: 'Investor',
    supplierLabel: 'Recipient'
  },
  donation: {
    sumOfPortions: -1,
    clientLabel: 'Donor',
    supplierLabel: 'Beneficiary'
  }
} as const

export type ContractNature = keyof typeof ContractNatures

export interface Contract extends Entity {
  id: string
  clientAccountId: string
  supplierAccountId: string
  nature: ContractNature
  currencyId: CurrencyId
  name?: string
}
