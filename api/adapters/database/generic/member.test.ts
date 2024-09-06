import { memberAdapter } from './member'
import * as member from 'mock/inMemory/member'

describe('-> member', () => {
  describe('getById', () => {
    it('should return an member Data for existing Id', async () => {
      const result = await memberAdapter.getById('totoAccount:totoUser')
      const expected = member.totoAccountTotoUserData
      expect(result).toEqual(expected)
    })
  })
  describe('isUserMemberOfAccount', () => {
    it('should return true if user is member of account', async () => {
      const result = await memberAdapter.isUserMemberOfAccount('totoUser', 'flexupAccount')

      expect(result).toEqual(true)
    })
    it('should return false if user is not member of account', async () => {
      const result = await memberAdapter.isUserMemberOfAccount('totoUser', 'fabrizioAccount')
      expect(result).toEqual(false)
    })
  })
  describe('getByUserId', () => {
    it('should return list of accounts for valid user Id', async () => {
      const result = await memberAdapter.getByUserId('totoUser')
      expect(result).toEqual(member.memberDatasForTotoUser)
    })
    it('should return list of accounts for valid user Id', async () => {
      const result = await memberAdapter.getByUserId('fabrizioUser')
      expect(result).toEqual(member.memberDatasForFabrizioUser)
    })
    it('should return [] for inexistant user Id', async () => {
      const result = await memberAdapter.getByUserId('inexistantUser')
      expect(result).toEqual([])
    })
  })
  describe('getByProperty', () => {
    it('should retrieve account-user by its user Id', async () => {
      const result = await memberAdapter.getByProperty('userId', 'totoUser')
      // console.log(
      //   'adapters/generic/member.test - : type of getByProperty',
      //   typeof memberAdapter.getByProperty
      // )
      expect(result).toEqual(member.memberDatasForTotoUser)
    })
    it('should retrieve account-user by its account Id', async () => {
      const result = await memberAdapter.getByProperty('accountId', 'flexupAccount')
      expect(result).toEqual(member.memberDatasForFlexupAccount)
    })
    it('should retrieve entities based on a property and its value', async () => {
      const results = await memberAdapter.getByProperty('role', 'guest')
      expect(results).toEqual([member.pizzaDOroTakeAwayAccountFabrizioUserData])
    })
  })
})
