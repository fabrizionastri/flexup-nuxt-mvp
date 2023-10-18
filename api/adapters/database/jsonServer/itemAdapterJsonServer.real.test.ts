import * as items from 'mock/inMemory/item'
import { createItemAdapterJsonServer } from './itemAdapterJsonServer'

const adapter = createItemAdapterJsonServer()

describe('createItemAdapterJsonServer - real Axios', () => {
  describe('getById', () => {
    it('should return item data for item id', async () => {
      const result = await adapter.getById('commercialOrderItem2')
      expect(result).toEqual(items.commercialOrderItem2Data)
    })
    it('should return undefined for unknown item id', async () => {
      const result = await adapter.getById('unknown')
      expect(result).toBeUndefined()
    })
  })
  describe('getByOrderId', () => {
    it('should return itemDatas for order id', async () => {
      const result = await adapter.getByOrderId('commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1Data, items.commercialOrderItem2Data])
    })
    it('should return [] for unknown order id', async () => {
      const result = await adapter.getByOrderId('unknown')
      expect(result).toEqual([])
    })
  })
  describe('getByProperty', () => {
    it('should return itemDatas for order id', async () => {
      const result = await adapter.getByProperty('orderId', 'commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1Data, items.commercialOrderItem2Data])
    })
    it('should return [] for unknown order id', async () => {
      const result = await adapter.getByProperty('orderId', 'unknown')
      expect(result).toEqual([])
    })
  })
})
