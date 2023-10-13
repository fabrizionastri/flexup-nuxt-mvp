import { TrancheAdapter } from 'adapters/database/interfaces'
import { OrderData, Tranche, TrancheData } from 'entities/'
import { computeTranche } from 'usecases/computeTranche'

export interface TrancheGateway {
  getByOrderIdData: (orderId: string) => Promise<TrancheData[]>
  getByOrder: (order: OrderData) => Promise<Tranche[]>
}

export const createTrancheGateway = (trancheAdapter: TrancheAdapter): TrancheGateway => ({
  getByOrderIdData: (orderId: string): Promise<TrancheData[]> =>
    trancheAdapter.getByOrderId(orderId),
  getByOrder: async (order: OrderData): Promise<Tranche[]> =>
    (await trancheAdapter.getByOrderId(order.id)).map((tranche: TrancheData) =>
      computeTranche(tranche, order)
    )
})
