import { TrancheAdapter } from 'adapters/database/interfaces'
import { TrancheData } from 'entities/tranche'
import { allTrancheDatas } from 'mock/inMemory/tranche'

export const createTrancheAdapterInMemory = (): TrancheAdapter => {
  const tranches: TrancheData[] = allTrancheDatas
  const getByOrderId = (orderId: string): Promise<TrancheData[]> =>
    Promise.resolve(tranches.filter((tranche) => tranche.orderId === orderId))
  return {
    getByOrderId
  }
}
