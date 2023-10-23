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
export * from './order'
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
import { orderDatas } from './order'
import { trancheDatas } from './tranche'
import { userDatas } from './user'

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
  order: orderDatas,
  tranche: trancheDatas,
  user: userDatas
}

export default inMemory
