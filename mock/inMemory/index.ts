export * from './account'
export * from './accountUser'
export * from './allocation'
export * from './balance'
export * from './credential'
export * from './commitment'
export * from './item'
export * from './order'
export * from './resolution'
export * from './riskFactor'
export * from './tranche'
export * from './user'

import { allAccountDatas } from './account'
import { allAccountUserDatas } from './accountUser'
import { allCredentialDatas } from './credential'
import { allItemDatas } from './item'
import { allOrderDatas } from './order'
import { allTrancheDatas } from './tranche'
import { allUserDatas } from './user'

export const inMemory = {
  account: allAccountDatas,
  accountUser: allAccountUserDatas,
  credential: allCredentialDatas,
  item: allItemDatas,
  order: allOrderDatas,
  tranche: allTrancheDatas,
  user: allUserDatas
}

export default inMemory
