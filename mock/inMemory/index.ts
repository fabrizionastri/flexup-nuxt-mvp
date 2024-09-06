import { accountDatas } from './account'
import { constituentDatas } from './constituent'
import { countryDatas } from './country'
import { currencyDatas } from './currency'
import { groupingDatas } from './grouping'
import { identifierDatas } from './identifier'
import { individualDatas } from './individual'
import { itemDatas } from './item'
import { legalPersonDatas } from './legalPerson'
import { memberDatas } from './member'
import { orderDatas } from './order'
import { organizationDatas } from './organization'
import { passwordDatas } from './password'
import { tokenDatas } from './token'
import { trancheDatas } from './tranche'
import { userDatas } from './user'

export * from './account'
export * from './constituent'
export * from './country'
export * from './currency'
export * from './grouping'
export * from './identifier'
export * from './individual'
export * from './item'
export * from './legalPerson'
export * from './member'
export * from './order'
export * from './organization'
export * from './password'
export * from './token'
export * from './tranche'
export * from './user'

export const inMemory = {
  account: accountDatas,
  constituent: constituentDatas,
  country: countryDatas,
  currency: currencyDatas,
  grouping: groupingDatas,
  identifier: identifierDatas,
  individual: individualDatas,
  item: itemDatas,
  legalPerson: legalPersonDatas,
  member: memberDatas,
  order: orderDatas,
  organization: organizationDatas,
  password: passwordDatas,
  token: tokenDatas,
  tranche: trancheDatas,
  user: userDatas,
}

export default inMemory
