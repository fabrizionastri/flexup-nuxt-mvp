import { groupingOwnerAdapter } from './groupingOwner'
import {
  doMazyGroupingAgroCoopAccountData,
  doMazyGroupingTotoAccountData,
  plopGroupingTotoAccountData
} from 'mock/inMemory'

describe('groupingOwner adapter', () => {
  describe('getById', () => {
    it('should return a groupingOwner Data for existing Id', async () => {
      const result = await groupingOwnerAdapter.getById('doMazyGroupingAgroCoopAccount')
      // console.log('result - existing Id', result)
      const expected = doMazyGroupingAgroCoopAccountData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await groupingOwnerAdapter.getById('inexistantId')
      // console.log('result - inexistant Id', result)
      expect(result).toBeUndefined()
    })
  })
  describe('getByAccountId', () => {
    it('should return an groupingOwner Data for existing accountId', async () => {
      const result = await groupingOwnerAdapter.getByAccountId('totoAccount')
      const expected = [doMazyGroupingTotoAccountData, plopGroupingTotoAccountData]
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant accountId', async () => {
      const result = await groupingOwnerAdapter.getByAccountId('inexistantId')
      expect(result).toEqual([])
    })
  })
})
