import { TrancheAdapter } from 'adapters/database/interfaces'
import { trancheDatas } from 'db/inMemory'
import { TrancheData } from 'entities/tranche'

export const createTrancheAdapterInMemory = (): TrancheAdapter => {
  const tranches: TrancheData[] = [...trancheDatas]
  const getByOrderId = (orderId: string): Promise<TrancheData[]> =>
    Promise.resolve(tranches.filter((tranche) => tranche.orderId === orderId))
  return {
    getByOrderId
  }
}
