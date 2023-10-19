import { TrancheAdapter } from 'adapters/database/interfaces'
import { Order, Tranche, TrancheData } from 'entities/'

import { createTrancheAdapter } from 'adapters/database'

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

export const createTrancheGateway = (trancheAdapter: TrancheAdapter): TrancheGateway => {
  // const trancheAdapter = createTrancheAdapter()

  const getByOrder = async (order: Order): Promise<Tranche[]> =>
    (await trancheAdapter.getByOrderId(order.id)).map((tranche: TrancheData) =>
      computeTranche(tranche, order)
    )

  return { getByOrder }
}

export const trancheGateway = createTrancheGateway(createTrancheAdapter())
