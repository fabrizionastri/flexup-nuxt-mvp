import type { CurrencyId, CountryId, Entity } from '.'
import type { AccountUserRole } from '.'

export const accountOwnerMapping = {
  personal: 'individual',
  business: 'organization',
  project: 'project' || 'individual' || 'organization' || 'grouping',
  shared: 'grouping'
} as const // "as const" ensures that TypeScript sees these as literal types rather than general string types.

export type AccountType = keyof typeof accountOwnerMapping
export type OwnerType = (typeof accountOwnerMapping)[AccountType]

export const accountTypeIcons = {
  personal: '👤',
  business: '🏢',
  project: '🚀',
  shared: '👥'
}

export type AccountStatus = 'active' | 'pending' | 'suspended' | 'closed'

export interface AccountData extends Entity {
  id: string
  name: string // TOCHECK: this is a computed value, should we store it or not?
  type: AccountType // I think this is redundant with ownerType
  status: AccountStatus
  ownerId: string
  currencyId: CurrencyId
  countryId: CountryId
  creationDate: Date
  avatar?: string
  description?: string
}

export interface Account extends AccountData {
  symbol: string
  ownerName: string
  ownerType: OwnerType
  ownerSymbol: string
  currencyName: string
  currencySymbol: string
  myRole: AccountUserRole // TODO: this depends on the active user, so I put 'guest' in the mock, but will modify it in each test.
}
