import { Currency, Country } from './_general'

export type AccountType = 'Main' | 'Project'
export type OwnerType = 'Individual' | 'Organization' | 'Account' | 'Grouping'
export type AccountStatus = 'Active' | 'Pending' | 'Suspended' | 'Closed'

export interface AccountData {
  id: string
  name: string
  type: AccountType
  status: AccountStatus
  ownerType: OwnerType
  ownerId: string
  currencyId: Currency
  countryId: Country
  creationDate: Date
  avatar?: string
  description?: string
}

export interface Account extends AccountData {
  label: string
  ownerName: string
  ownerLabel: string
  currencyName: string
  currencySymbol: string
}
