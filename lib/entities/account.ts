import type { CurrencyId, CountryId, Entity, AccountUserRole } from '.'

// TODO: use this list to limit the possible options in the UI for creating a new account
export const accountTypes = {
  personal: {
    symbol: '👤',
    ownerType: 'individual'
  },
  business: {
    symbol: '💼',
    ownerType: 'organization'
  },
  project: {
    symbol: '🚀',
    ownerType: 'personal' || 'business' || 'project' || 'shared'
  },
  shared: {
    symbol: '👥',
    ownerType: 'grouping'
  }
} as const // "as const" ensures that TypeScript sees these as literal types rather than general string types.

export type AccountType = keyof typeof accountTypes

// TODO: use this list to limit the possible options in the UI for creating a new account
export const ownerTypes = {
  individual: {
    symbol: '🧑‍💻',
    ownedAccountType: 'personal'
  },
  organization: {
    symbol: '🏢',
    ownedAccountType: 'business'
  },
  grouping: {
    symbol: '👪',
    ownedAccountType: 'shared'
  },
  personal: {
    symbol: '👤',
    ownedAccountType: 'project'
  },
  business: {
    symbol: '💼',
    ownedAccountType: 'project'
  },
  project: {
    symbol: '🚀',
    ownedAccountType: 'project'
  },
  shared: {
    symbol: '👥',
    ownedAccountType: 'project'
  }
} as const

export type OwnerType = keyof typeof ownerTypes

export const getOwnerTypeSymbol = (ownerType: OwnerType): string => ownerTypes[ownerType].symbol

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
  countryName: string
  role?: AccountUserRole
}
