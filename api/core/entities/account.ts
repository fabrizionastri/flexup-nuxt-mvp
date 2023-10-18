import { Currency, Country } from './_general'

/* Account Type is redundant with OwnerType*/
// export type AccountType = 'personal' | 'organization' | 'project' | 'grouping'
export type OwnerType = 'individual' | 'organization' | 'account' | 'grouping'
export type AccountStatus = 'active' | 'pending' | 'suspended' | 'closed'

export interface AccountData {
  id: string
  name: string
  // type: AccountType // I think this is redundant with ownerType
  status: AccountStatus
  ownerType: OwnerType
  ownerId?: string // TODO: Check only required if ownerType is 'account', other wise, ownerId is the same as id ???
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
