import type { Order, Tranche, TrancheData } from 'lib/entities'
import { trancheAdapter } from 'adapters/database'
export interface TrancheGateway {
  getByOrder: (order: Order) => Promise<Tranche[]>
}

import { round6 } from 'utils/round'

export const computeTranche = (trancheData: TrancheData, orderData: Order): Tranche => ({
  ...trancheData,
  sign: trancheData.portion > 0 ? 1 : -1,
  payorId: trancheData.portion > 0 ? orderData.clientAccountId : orderData.supplierAccountId,
  payeeId: trancheData.portion > 0 ? orderData.supplierAccountId : orderData.clientAccountId,
  principal: orderData.amountInclTax
    ? round6(Math.abs(trancheData.portion) * orderData.amountInclTax)
    : undefined
})

export const createTrancheGateway = (): TrancheGateway => {
  const getByOrder = async (order: Order): Promise<Tranche[]> =>
    (await trancheAdapter.getByOrderId(order.id)).map((tranche: TrancheData) =>
      computeTranche(tranche, order)
    )

  return { getByOrder }
}

export const trancheGateway = createTrancheGateway()
