import { groupingAdapter } from './grouping'
import { doMazyGroupingData } from 'mock/inMemory'

describe('grouping adapter', () => {
  describe('getById', () => {
    it('should return an grouping Data for existing Id', async () => {
      const result = await groupingAdapter.getById('doMazyGrouping')
      const expected = doMazyGroupingData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await groupingAdapter.getById('inexistantId')
      expect(result).toBeUndefined()
    })
  })
})
