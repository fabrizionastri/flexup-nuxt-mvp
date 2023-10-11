import { createItemGateway } from 'gateways/itemGateway'
import { itemDatas, items } from '~/db/inMemory/item'

import { createItemAdapterInMemory } from 'src/adapters/database/inMemory/createItemAdapterInMemory'

let itemAdapter: any
let itemGateway: any
describe('itemGateway', () => {
  beforeAll(() => {
    itemAdapter = createItemAdapterInMemory()
    itemGateway = createItemGateway(itemAdapter)
  })

  describe('getByIdData', () => {
    it('should return the item with raw data only', async () => {
      const result = await itemGateway.getByIdData('item0')
      expect(result).toEqual(itemDatas[0])
    })
  })

  describe('getByOrderIdData', () => {
    it('should return the items with raw data for the given order id', async () => {
      const result = await itemGateway.getByOrderIdData('order0')
      expect(result).toEqual(itemDatas.slice(0, 2))
    })
  })

  describe('getById', () => {
    it('should return the item with calculations', async () => {
      const result = await itemGateway.getById('item0')
      expect(result).toEqual(items[0])
    })
  })

  describe('getByOrderId', () => {
    it('should return the items with calculations for the given order id', async () => {
      const result = await itemGateway.getByOrderId('order0')
      expect(result).toEqual(items.slice(0, 2))
    })
  })
})
