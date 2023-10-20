import { Currency, Country } from './_general'
import { AccountUserRole } from './accountUser'

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
  myRole: AccountUserRole // TODO: this depends on the active user, so I put 'guest' in the mock, but will modify it in each test.
}
