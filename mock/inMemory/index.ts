import { accountDatas } from './account'
import { accountUserDatas } from './accountUser'
import { countryDatas } from './country'
import { currencyDatas } from './currency'
import { groupingDatas } from './grouping'
import { groupingAccountDatas } from './groupingAccount'
import { identifierDatas } from './identifier'
import { individualDatas } from './individual'
import { itemDatas } from './item'
import { legalPersonDatas } from './legalPerson'
import { orderDatas } from './order'
import { organizationDatas } from './organization'
import { passwordDatas } from './password'
import { tokenDatas } from './token'
import { trancheDatas } from './tranche'
import { userDatas } from './user'

export * from './account'
export * from './accountUser'
export * from './country'
export * from './currency'
export * from './grouping'
export * from './groupingAccount'
export * from './identifier'
export * from './individual'
export * from './item'
export * from './legalPerson'
export * from './order'
export * from './organization'
export * from './password'
export * from './token'
export * from './tranche'
export * from './user'

export const inMemory = {
  account: accountDatas,
  accountUser: accountUserDatas,
  country: countryDatas,
  currency: currencyDatas,
  grouping: groupingDatas,
  groupingAccount: groupingAccountDatas,
  identifier: identifierDatas,
  individual: individualDatas,
  item: itemDatas,
  legalPerson: legalPersonDatas,
  order: orderDatas,
  organization: organizationDatas,
  password: passwordDatas,
  token: tokenDatas,
  tranche: trancheDatas,
  user: userDatas,
}

export default inMemory
