import type { TrancheAdapter } from '../interfaces'
import type { TrancheData } from 'entities/tranche'
import { trancheDatas } from 'mock/inMemory/tranche'

export const createTrancheAdapter = (): TrancheAdapter => {
  const tranches: TrancheData[] = trancheDatas
  const getByOrderId = (orderId: string): Promise<TrancheData[]> =>
    Promise.resolve(tranches.filter((tranche) => tranche.orderId === orderId))
  return {
    getByOrderId
  }
}

export const trancheAdapter = createTrancheAdapter()
