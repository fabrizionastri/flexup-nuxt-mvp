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

import { accountDatas } from './account'
import { itemDatas } from './item'
import { orderDatas } from './order'
import { userDatas } from './user'

export const inMemory = {
  account: accountDatas,
  item: itemDatas,
  order: orderDatas,
  user: userDatas
}

export default inMemory
