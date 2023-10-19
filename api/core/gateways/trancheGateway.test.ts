import {
  trancheDatasForcommercialOrder,
  tranchesForcommercialOrder,
  allOrderDatas
} from 'mock/inMemory'
import { createTrancheGateway } from './trancheGateway'
import { createTrancheAdapter } from 'adapters/database'

describe('createTrancheGateway', () => {
  let trancheGateway: any
  let trancheAdapter: any
  beforeEach(() => {
    trancheAdapter = createTrancheAdapter()
    trancheGateway = createTrancheGateway(trancheAdapter)
  })

  describe('getByOrder', () => {
    it('should return [] for an order with no tranches', async () => {
      const order = allOrderDatas[3]
      expect(await trancheGateway.getByOrder(order)).toEqual([])
    })
    it('should return the tranches (computed) for an existing order', async () => {
      const order = allOrderDatas[0]
      expect(await trancheGateway.getByOrder(order)).toEqual(tranchesForcommercialOrder)
    })
  })
})
