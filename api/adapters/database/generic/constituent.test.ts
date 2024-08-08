import { constituentAdapter } from './constituent'
import {
  doMazyGroupingAgroCoopAccountData,
  doMazyGroupingTotoAccountData,
  plopGroupingTotoAccountData
} from 'mock/inMemory'

describe('constituent adapter', () => {
  describe('getById', () => {
    it('should return a constituent Data for existing Id', async () => {
      const result = await constituentAdapter.getById('doMazyGroupingAgroCoopAccount')
      // console.log('result - existing Id', result)
      const expected = doMazyGroupingAgroCoopAccountData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await constituentAdapter.getById('inexistantId')
      // console.log('result - inexistant Id', result)
      expect(result).toBeUndefined()
    })
  })
  describe('getByAccountId', () => {
    it('should return an constituent Data for existing accountId', async () => {
      const result = await constituentAdapter.getByAccountId('totoAccount')
      const expected = [doMazyGroupingTotoAccountData, plopGroupingTotoAccountData]
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant accountId', async () => {
      const result = await constituentAdapter.getByAccountId('inexistantId')
      expect(result).toEqual([])
    })
  })
})
