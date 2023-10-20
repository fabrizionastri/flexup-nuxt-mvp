import * as items from 'mock/inMemory/item'
import { itemAdapter } from './'

describe('createItemAdapter - real Axios', () => {
  describe('getById', () => {
    it('should return item data for item id', async () => {
      const result = await itemAdapter.getById('commercialOrderItem2')
      expect(result).toEqual(items.commercialOrderItem2Data)
    })
    it('should return undefined for unknown item id', async () => {
      const result = await itemAdapter.getById('unknown')
      expect(result).toBeUndefined()
    })
  })
  describe('getByOrderId', () => {
    it('should return itemDatas for order id', async () => {
      const result = await itemAdapter.getByOrderId('commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1Data, items.commercialOrderItem2Data])
    })
    it('should return [] for unknown order id', async () => {
      const result = await itemAdapter.getByOrderId('unknown')
      expect(result).toEqual([])
    })
  })
  describe('getByProperty', () => {
    it('should return itemDatas for order id', async () => {
      const result = await itemAdapter.getByProperty('orderId', 'commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1Data, items.commercialOrderItem2Data])
    })
    it('should return [] for unknown order id', async () => {
      const result = await itemAdapter.getByProperty('orderId', 'unknown')
      expect(result).toEqual([])
    })
  })
})
