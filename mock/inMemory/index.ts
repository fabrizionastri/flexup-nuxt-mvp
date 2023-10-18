export * from './account'
export * from './allocation'
export * from './balance'
export * from './commitment'
export * from './item'
export * from './order'
export * from './resolution'
export * from './riskFactor'
export * from './tranche'
export * from './user'

// import { commitmentDatas } from './commitment'
// import { allocationDatas } from './allocation'
// import { resolutionDatas } from './resolution'
// import { balanceDatas } from './balance'
// import { contractDatas } from './contract'
// import { paymentTermsDatas } from './paymentTerms'
// import { productDatas } from './product'
// import { reserveDatas } from './reserve'
// import { trancheDatas } from './tranche'

import { allAccountDatas } from './account'
import { allItemDatas } from './item'
import { allOrderDatas } from './order'
import { allUserDatas } from './user'

export const inMemory = {
  account: allAccountDatas,
  item: allItemDatas,
  order: allOrderDatas,
  user: allUserDatas
}

export default inMemory
