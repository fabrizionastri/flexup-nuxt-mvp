import { accountMemberAdapter } from './accountMember'
import * as accountMember from 'mock/inMemory/accountMember'

describe('-> accountMember', () => {
  describe('getById', () => {
    it('should return an accountMember Data for existing Id', async () => {
      const result = await accountMemberAdapter.getById('totoAccount:totoUser')
      const expected = accountMember.totoAccountTotoUserData
      expect(result).toEqual(expected)
    })
  })
  describe('isUserMemberOfAccount', () => {
    it('should return true if user is member of account', async () => {
      const result = await accountMemberAdapter.isUserMemberOfAccount('totoUser', 'flexupAccount')

      expect(result).toEqual(true)
    })
    it('should return false if user is not member of account', async () => {
      const result = await accountMemberAdapter.isUserMemberOfAccount('totoUser', 'fabrizioAccount')
      expect(result).toEqual(false)
    })
  })
  describe('getByUserId', () => {
    it('should return list of accounts for valid user Id', async () => {
      const result = await accountMemberAdapter.getByUserId('totoUser')
      expect(result).toEqual(accountMember.accountMemberDatasForTotoUser)
    })
    it('should return list of accounts for valid user Id', async () => {
      const result = await accountMemberAdapter.getByUserId('fabrizioUser')
      expect(result).toEqual(accountMember.accountMemberDatasForFabrizioUser)
    })
    it('should return [] for inexistant user Id', async () => {
      const result = await accountMemberAdapter.getByUserId('inexistantUser')
      expect(result).toEqual([])
    })
  })
  describe('getByProperty', () => {
    it('should retrieve account-user by its user Id', async () => {
      const result = await accountMemberAdapter.getByProperty('userId', 'totoUser')
      // console.log(
      //   'adapters/generic/accountMember.test - : type of getByProperty',
      //   typeof accountMemberAdapter.getByProperty
      // )
      expect(result).toEqual(accountMember.accountMemberDatasForTotoUser)
    })
    it('should retrieve account-user by its account Id', async () => {
      const result = await accountMemberAdapter.getByProperty('accountId', 'flexupAccount')
      expect(result).toEqual(accountMember.accountMemberDatasForFlexupAccount)
    })
    it('should retrieve entities based on a property and its value', async () => {
      const results = await accountMemberAdapter.getByProperty('role', 'guest')
      expect(results).toEqual([accountMember.pizzaDOroTakeAwayAccountFabrizioUserData])
    })
  })
})
