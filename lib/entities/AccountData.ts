import type { CurrencyId, CountryId } from '.'
import { AccountType, AccountStatus } from './account'

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
