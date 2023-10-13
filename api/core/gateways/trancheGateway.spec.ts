import { trancheDatasForOrder0, tranchesForOrder0, orderDatas } from 'mock/inMemory'
import { createTrancheGateway } from './trancheGateway'
import { createTrancheAdapter } from 'adapters/database'

describe('createTrancheGateway', () => {
  let trancheGateway: any
  let trancheAdapter: any
  beforeEach(() => {
    trancheAdapter = createTrancheAdapter()
    trancheGateway = createTrancheGateway(trancheAdapter)
  })

  describe('getByOrderIdData', () => {
    it('should return [] for an unknown orderId', async () => {
      const orderId = 'unknown'
      expect(await trancheGateway.getByOrderIdData(orderId)).toEqual([])
    })
    it('should return the tranches data for an existing orderId', async () => {
      const orderId = 'order0'
      expect(await trancheGateway.getByOrderIdData(orderId)).toEqual(trancheDatasForOrder0)
    })
  })
  describe('getByOrder', () => {
    it('should return [] for an order with no tranches', async () => {
      const order = orderDatas[3]
      expect(await trancheGateway.getByOrder(order)).toEqual([])
    })
    it('should return the tranches (computed) for an existing order', async () => {
      const order = orderDatas[0]
      expect(await trancheGateway.getByOrder(order)).toEqual(tranchesForOrder0)
    })
  })
})
