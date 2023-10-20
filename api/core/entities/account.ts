import { AccountUserRole } from '.'

export const accountOwnerMapping = {
  personal: 'individual',
  business: 'organization',
  project: 'project' || 'individual' || 'organization' || 'grouping',
  shared: 'grouping'
} as const // "as const" ensures that TypeScript sees these as literal types rather than general string types.

export type AccountType = keyof typeof accountOwnerMapping
export type OwnerType = (typeof accountOwnerMapping)[AccountType]

export const typeIcons = {
  personal: '👤',
  business: '🏢',
  project: '🚀',
  shared: '👥'
}

export type AccountStatus = 'active' | 'pending' | 'suspended' | 'closed'

export interface AccountData {
  id: string
  name: string
  type: AccountType // I think this is redundant with ownerType
  status: AccountStatus
  ownerId: string
  currencyId: string
  countryId: string
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
