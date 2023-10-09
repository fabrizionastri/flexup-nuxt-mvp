import { inMemory } from 'mock/inMemory'

import { createItemAdapterJsonServer } from './createItemAdapterJsonServer'

describe('createItemAdapterJsonServer (real Axios)', () => {
  describe('getById', () => {
    it('should return itemData for item id', async () => {
      const itemAdapter = createItemAdapterJsonServer()
      const itemData = await itemAdapter.getById('item2')
      expect(itemData).toEqual(inMemory.item[2])
    })
    it('should return undefined for unknown item id', async () => {
      const itemAdapter = createItemAdapterJsonServer()
      const itemData = await itemAdapter.getById('unknown')
      expect(itemData).toBeUndefined()
    })
  })
  describe('getByOrderId', () => {
    it('should return itemDatas for order id', async () => {
      const itemAdapter = createItemAdapterJsonServer()
      const itemDatas = await itemAdapter.getByOrderId('order1')
      expect(itemDatas).toEqual([inMemory.item[2], inMemory.item[3]])
    })
    it('should return [] for unknown order id', async () => {
      const itemAdapter = createItemAdapterJsonServer()
      const itemDatas = await itemAdapter.getByOrderId('unknown')
      expect(itemDatas).toEqual([])
    })
  })
  describe('getByOrderIds', () => {
    it('should return itemDatas for order ids', async () => {
      const itemAdapter = createItemAdapterJsonServer()
      const itemDatas = await itemAdapter.getByOrderIds(['order1', 'order2'])
      expect(itemDatas).toEqual([
        inMemory.item[2],
        inMemory.item[3],
        inMemory.item[4],
        inMemory.item[5],
      ])
    })
    it('should return [] for unknown order ids', async () => {
      const itemAdapter = createItemAdapterJsonServer()
      const itemDatas = await itemAdapter.getByOrderIds(['unknown'])
      expect(itemDatas).toEqual([])
    })
  })
})
