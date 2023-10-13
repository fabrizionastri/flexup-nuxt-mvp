export type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF' | 'JPY'

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

export interface Contract {
  id: string
  clientId: string
  supplierId: string
  nature: ContractNature
  currency: Currency
  name?: string
}
