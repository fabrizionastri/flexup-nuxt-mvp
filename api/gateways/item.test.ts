import { itemGateway } from '.'

import * as items from 'mock/inMemory/item'

describe('itemGateway', () => {
  describe('getById', () => {
    it('should return the item with calculations', async () => {
      const result = await itemGateway.getById('commercialOrderItem1')
      expect(result).toEqual(items.commercialOrderItem1)
    })
  })
  describe('getByOrderId', () => {
    it('commercialOrder - should return the items with calculations for the given order id', async () => {
      const result = await itemGateway.getByOrderId('commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1, items.commercialOrderItem2])
    })
    it('orderWithNoTranches - should return the computed item with items but no tranches', async () => {
      const result = await itemGateway.getByOrderId('orderWithNoTranches')
      expect(result).toEqual([items.orderWithNoTranchesItem])
    })
    it('orderWithNoItems - should return the items with calculations for the given order id', async () => {
      const result = await itemGateway.getByOrderId('orderWithNoItems')
      expect(result).toEqual([])
    })
  })
})
