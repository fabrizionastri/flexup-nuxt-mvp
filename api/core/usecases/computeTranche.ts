import { round6 } from 'utils/round'
import { TrancheData, OrderData, Tranche } from '../entities'

export const computeTranche = (trancheData: TrancheData, orderData: OrderData): Tranche => ({
  ...trancheData,
  sign: trancheData.portion > 0 ? 1 : -1,
  payorId: trancheData.portion > 0 ? orderData.clientAccountId : orderData.supplierAccountId,
  payeeId: trancheData.portion > 0 ? orderData.supplierAccountId : orderData.clientAccountId,
  principal: orderData.principal
    ? round6(Math.abs(trancheData.portion) * orderData.principal)
    : undefined
})
