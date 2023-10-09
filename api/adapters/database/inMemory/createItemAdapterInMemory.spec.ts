import { itemDatas } from 'mock/inMemory'

import { createItemAdapterInMemory } from './createItemAdapterInMemory'

describe('createItemAdapterInMemory', () => {
  const adapter = createItemAdapterInMemory()
  describe('getById', () => {
    it('should return undefined when item id not found', async () => {
      const item = await adapter.getById('nonexistentId')
      expect(item).toBeUndefined()
    })

    it('should  return one item for existing item id', async () => {
      const item = await adapter.getById('item0')
      expect(item).toEqual(itemDatas[0])
    })
  })
  describe('getByOrderId', () => {
    it('should return an array of items for existing order id', async () => {
      const items = await adapter.getByOrderId('order0')
      expect(items).toEqual([itemDatas[0], itemDatas[1]])
    })

    it('should return an empty array for existing empty order', async () => {
      const items = await adapter.getByOrderId('order3')
      expect(items).toEqual([])
    })

    it('should return an empty array for non existing  order', async () => {
      const items = await adapter.getByOrderId('order99')
      expect(items).toEqual([])
    })
  })

  describe('getByOrderIds', () => {
    it('should return an array for array of existing orders', async () => {
      const items = await adapter.getByOrderIds(['order0', 'order1'])
      expect(items).toEqual(items.slice(0, 4))
    })

    it('should return an empty array for non existing orders', async () => {
      const items = await adapter.getByOrderId('order99')
      expect(items).toEqual([])
    })
  })
})
