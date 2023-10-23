export * from './account'
export * from './accountUser'
export * from './allocation'
export * from './balance'
export * from './credential'
export * from './commitment'
export * from './contract'
export * from './country'
export * from './currency'
export * from './grouping'
export * from './groupingAccount'
export * from './individual'
export * from './item'
export * from './legalPerson'
export * from './order'
export * from './organization'
export * from './resolution'
export * from './riskFactor'
export * from './tranche'
export * from './user'

import { accountDatas } from './account'
import { accountUserDatas } from './accountUser'
import { countryDatas } from './country'
import { credentialDatas } from './credential'
import { currencyDatas } from './currency'
import { groupingDatas } from './grouping'
import { groupingAccountDatas } from './groupingAccount'
import { individualDatas } from './individual'
import { itemDatas } from './item'
import { legalPersons } from './legalPerson'
import { orderDatas } from './order'
import { organizationDatas } from './organization'
import { trancheDatas } from './tranche'
import { userDatas } from './user'

// Important : the keys of inMemory is used to generate the EntityName type
export const inMemory = {
  account: accountDatas,
  accountUser: accountUserDatas,
  credential: credentialDatas,
  country: countryDatas,
  currency: currencyDatas,
  grouping: groupingDatas,
  groupingAccount: groupingAccountDatas,
  individual: individualDatas,
  item: itemDatas,
  legalPerson: legalPersons,
  order: orderDatas,
  organization: organizationDatas,
  tranche: trancheDatas,
  user: userDatas
}

export default inMemory
