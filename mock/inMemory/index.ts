export * from './account'
export * from './accountUser'
export * from './allocation'
export * from './balance'
export * from './commitment'
export * from './contract'
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
export * from './resolution'
export * from './riskFactor'
export * from './tranche'
export * from './user'
export * from './userPassword'

import { accountDatas } from './account'
import { accountUserDatas } from './accountUser'
import { countryDatas } from './country'
import { currencyDatas } from './currency'
import { groupingAccountDatas } from './groupingAccount'
import { groupingDatas } from './grouping'
import { identifierDatas } from './identifier'
import { individualDatas } from './individual'
import { itemDatas } from './item'
import { legalPersons } from './legalPerson'
import { orderDatas } from './order'
import { organizationDatas } from './organization'
import { trancheDatas } from './tranche'
import { userDatas } from './user'
import { userPasswordDatas } from './userPassword'

// Important : the keys of inMemory is used to generate the EntityName type
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
  legalPerson: legalPersons,
  order: orderDatas,
  organization: organizationDatas,
  tranche: trancheDatas,
  user: userDatas,
  userPassword: userPasswordDatas
}

export default inMemory
