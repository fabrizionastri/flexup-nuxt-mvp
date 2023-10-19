import { createItemAdapterInMemory } from 'adapters/database/inMemory/itemAdapterInMemory'
import * as items from 'mock/inMemory/item'

describe('createItemAdapterInMemory', () => {
  const itemAdapter = createItemAdapterInMemory()
  describe('getById', () => {
    it('should return undefined when item id not found', async () => {
      const result = await itemAdapter.getById('nonexistentId')
      expect(result).toBeUndefined()
    })

    it('should return one item for existing item id', async () => {
      const result = await itemAdapter.getById('commercialOrderItem1')
      expect(result).toEqual(items.commercialOrderItem1Data)
    })
  })
  describe('getByOrderId', () => {
    it('commercialOrder - should return array of items for existing order id', async () => {
      const result = await itemAdapter.getByOrderId('commercialOrder')
      expect(result).toEqual([items.commercialOrderItem1Data, items.commercialOrderItem2Data])
    })

    it('orderWithNoTranches - should return array of items for existing order id', async () => {
      const result = await itemAdapter.getByOrderId('orderWithNoTranches')
      expect(result).toEqual([items.orderWithNoTranchesItemData])
    })
    it('orderWithNoItems - should return an empty array for existing empty order', async () => {
      const result = await itemAdapter.getByOrderId('orderWithNoItems')
      expect(result).toEqual([])
    })

    it('order99 - should return an empty array for non existing  order', async () => {
      const result = await itemAdapter.getByOrderId('order99')
      expect(result).toEqual([])
    })
  })
})
