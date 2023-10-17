import { Currency, Country } from './_general'

export type AccountType = 'main' | 'project'
export type OwnerType = 'individual' | 'organization' | 'account' | 'grouping'
export type AccountStatus = 'active' | 'pending' | 'suspended' | 'closed'

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
