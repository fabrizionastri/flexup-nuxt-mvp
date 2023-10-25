import { computeTranche, trancheGateway } from '.'
import * as orders from 'mock/inMemory/order'
import * as tranches from 'mock/inMemory/tranche'

describe('trancheGateway', () => {
  describe('computeTranche', () => {
    it('should return a computed tranche if matching order and trancheData are provided', () => {
      const order = orders.commercialOrder
      const trancheData = tranches.commercialOrderPreferred50Data
      const result = computeTranche(trancheData, order)
      expect(result).toMatchObject(tranches.commercialOrderPreferred50)
    })
    it.only('should return a computed tranched with negative sign', () => {
      const order = orders.orderWithRebate
      const trancheData = tranches.orderWithRebateFlexRebate50Data
      const result = computeTranche(trancheData, order)
      expect(result).toMatchObject(tranches.orderWithRebateFlexRebate50)
    })
  })

  describe('getByOrder', () => {
    it('should return [] for an order with no tranches', async () => {
      const order = orders.orderWithNoTranches
      const result = await trancheGateway.getByOrder(order)
      expect(result).toEqual([])
    })
    it('should return the tranches (computed) for an existing order', async () => {
      const order = orders.commercialOrder
      order.tranches = [] // remove the tranches for the test
      const result = await trancheGateway.getByOrder(order)
      expect(result).toEqual(tranches.tranchesForcommercialOrder)
    })
  })
})
