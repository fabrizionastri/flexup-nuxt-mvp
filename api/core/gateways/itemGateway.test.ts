import { createItemGateway } from 'gateways/itemGateway'
import { itemDatas, items } from 'mock/inMemory/item'

import { createItemAdapterInMemory } from '~/api/adapters/database/inMemory/itemAdapterInMemory'

let itemAdapter: any
let itemGateway: any
describe('itemGateway', () => {
  beforeAll(() => {
    itemAdapter = createItemAdapterInMemory()
    itemGateway = createItemGateway(itemAdapter)
  })

  describe('getByIdData', () => {
    it('should return the item with raw data only', async () => {
      const result = await itemGateway.getByIdData('commercialOrder_item0')
      expect(result).toEqual(itemDatas[0])
    })
  })

  describe('getByOrderIdData', () => {
    it('should return the items with raw data for the given order id', async () => {
      const result = await itemGateway.getByOrderIdData('commercialOrder')
      expect(result).toEqual(itemDatas.slice(0, 2))
    })
  })

  describe('getById', () => {
    it('should return the item with calculations', async () => {
      const result = await itemGateway.getById('commercialOrder_item0')
      expect(result).toEqual(items[0])
    })
  })

  describe('getByOrderId', () => {
    it('should return the items with calculations for the given order id', async () => {
      const result = await itemGateway.getByOrderId('commercialOrder')
      expect(result).toEqual(items.slice(0, 2))
    })
  })
})
