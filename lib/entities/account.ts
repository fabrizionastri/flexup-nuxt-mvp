// lib/entities/account.ts

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
  subaccount: {
    symbol: '🚀',
    ownerType: 'personal' || 'business' || 'subaccount' || 'shared'
  },
  shared: {
    symbol: '👥',
    ownerType: 'grouping'
  }
} as const // "as const" ensures that TypeScript sees these as literal types rather than general string types.

export type AccountType = keyof typeof accountTypes

// TODO: use this list to limit the possible options in the UI for creating a new account
// add this symbol for sleeping (inactive) accounts : 😴
export const ownerTypes = {
  individual: {
    symbol: '🧑‍💻',
    category: 'stakeholder',
    subCategory: 'legal person',
    childAccountType: 'personal'
  },
  organization: {
    symbol: '🏢',
    category: 'stakeholder',
    subCategory: 'legal person',
    childAccountType: 'business'
  },
  grouping: {
    symbol: '👪',
    category: 'stakeholder',
    subCategory: 'grouping',
    childAccountType: 'shared'
  },
  personal: {
    symbol: '👤',
    category: 'account',
    subCategory: 'main',
    childAccountType: 'subaccount'
  },
  business: {
    symbol: '💼',
    category: 'account',
    subCategory: 'main',
    childAccountType: 'subaccount'
  },
  shared: {
    symbol: '👥',
    category: 'account',
    subCategory: 'main',
    childAccountType: 'subaccount'
  },
  subaccount: {
    symbol: '🚀',
    category: 'account',
    subCategory: 'subaccount'
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
  isVirtual?: boolean
  createdByAccountId?: string
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
