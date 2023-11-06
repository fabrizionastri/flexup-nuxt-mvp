import { groupingAccountAdapter } from './groupingAccount'
import {
  doMazyGroupingAgroCoopAccountData,
  doMazyGroupingTotoAccountData,
  plopGroupingTotoAccountData
} from 'mock/inMemory'

describe('groupingAccount adapter', () => {
  describe('getById', () => {
    it('should return a groupingAccount Data for existing Id', async () => {
      const result = await groupingAccountAdapter.getById('doMazyGroupingAgroCoopAccount')
      // console.log('result - existing Id', result)
      const expected = doMazyGroupingAgroCoopAccountData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await groupingAccountAdapter.getById('inexistantId')
      // console.log('result - inexistant Id', result)
      expect(result).toBeUndefined()
    })
  })
  describe('getByAccountId', () => {
    it('should return an groupingAccount Data for existing accountId', async () => {
      const result = await groupingAccountAdapter.getByAccountId('totoAccount')
      const expected = [doMazyGroupingTotoAccountData, plopGroupingTotoAccountData]
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant accountId', async () => {
      const result = await groupingAccountAdapter.getByAccountId('inexistantId')
      expect(result).toEqual([])
    })
  })
})
