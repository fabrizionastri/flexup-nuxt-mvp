import { createItemAdapterInMemory } from 'adapters/database/inMemory/itemAdapterInMemory'
import * as items from 'mock/inMemory'

describe('createItemAdapterInMemory', () => {
  const adapter = createItemAdapterInMemory()
  describe('getById', () => {
    it('should return undefined when item id not found', async () => {
      const result = await adapter.getById('nonexistentId')
      expect(result).toBeUndefined()
    })

    it('should return one item for existing item id', async () => {
      const result = await adapter.getById('commercialOrderItem1')
      expect(result).toEqual(items.commercialOrderItem1Data)
    })
  })
  describe('getByOrderId', () => {
    it('should return an array of items for existing order id', async () => {
      const result = await adapter.getByOrderId('commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1Data, items.commercialOrderItem2Data])
    })

    it('should return an empty array for existing empty order', async () => {
      const result = await adapter.getByOrderId('orderWithNoTranches')
      expect(result).toEqual([])
    })

    it('should return an empty array for non existing  order', async () => {
      const result = await adapter.getByOrderId('order99')
      expect(result).toEqual([])
    })
  })
})
