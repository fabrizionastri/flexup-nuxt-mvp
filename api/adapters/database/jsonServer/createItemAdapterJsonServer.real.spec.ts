// import { itemDatas } from 'mock/inMemory'
import { itemDatas } from 'mock/inMemory'
import { createItemAdapterJsonServer } from './createItemAdapterJsonServer'

const adapter = createItemAdapterJsonServer()

describe('createItemAdapterJsonServer - real Axios', () => {
  describe('getById', () => {
    it('should return itemData for item id', async () => {
      const result = await adapter.getById('item2')
      expect(result).toEqual(itemDatas[2])
    })
    it('should return undefined for unknown item id', async () => {
      const result = await adapter.getById('unknown')
      expect(result).toBeUndefined()
    })
  })
  describe('getByOrderId', () => {
    it('should return itemDatas for order id', async () => {
      const result = await adapter.getByOrderId('order1')
      expect(result).toEqual([itemDatas[2], itemDatas[3]])
    })
    it('should return [] for unknown order id', async () => {
      const result = await adapter.getByOrderId('unknown')
      expect(result).toEqual([])
    })
  })
})