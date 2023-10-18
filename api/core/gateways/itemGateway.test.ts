import { createItemGateway } from 'gateways/itemGateway'
import * as items from 'mock/inMemory/item'

import { createItemAdapterInMemory } from 'adapters/database/inMemory/itemAdapterInMemory'

let itemAdapter: any
let itemGateway: any
describe('itemGateway', () => {
  beforeAll(() => {
    itemAdapter = createItemAdapterInMemory()
    itemGateway = createItemGateway(itemAdapter)
  })

  //   describe('getByIdData', () => {
  //     it('should return the item with raw data only', async () => {
  //       const result = await itemGateway.getById('commercialOrderItem1')
  //       expect(result).toEqual(items.commercialOrderItem1)
  //     })
  //   })
  //
  //   describe('getByOrderIdData', () => {
  //     it('should return the items with raw data for the given order id', async () => {
  //       const result = await itemGateway.getByOrderId('commercialOrder')
  //       expect(result).toEqual(items.itemsForCommercialOrder)
  //     })
  //   })

  describe('getById', () => {
    it('should return the item with calculations', async () => {
      const result = await itemGateway.getById('commercialOrderItem1')
      expect(result).toEqual(items.commercialOrderItem1)
    })
  })

  describe('getByOrderId', () => {
    it('should return the items with calculations for the given order id', async () => {
      const result = await itemGateway.getByOrderId('commercialOrder')
      expect(result).toEqual(items.itemsForCommercialOrder)
    })
  })
})
