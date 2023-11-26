import { accountUserAdapter } from './accountUser'
import * as accountUser from 'mock/inMemory/accountUser'

describe('-> accountUser', () => {
  describe('getById', () => {
    it('should return an accountUser Data for existing Id', async () => {
      const result = await accountUserAdapter.getById('totoAccount:totoUser')
      const expected = accountUser.totoAccountTotoUserData
      expect(result).toEqual(expected)
    })
  })
  describe('isUserMemberOfAccount', () => {
    it('should return true if user is member of account', async () => {
      const result = await accountUserAdapter.isUserMemberOfAccount('totoUser', 'flexupAccount')

      expect(result).toEqual(true)
    })
    it('should return false if user is not member of account', async () => {
      const result = await accountUserAdapter.isUserMemberOfAccount('totoUser', 'fabrizioAccount')
      expect(result).toEqual(false)
    })
  })
  describe('getByUserId', () => {
    it('should return list of accounts for valid user Id', async () => {
      const result = await accountUserAdapter.getByUserId('totoUser')
      expect(result).toEqual(accountUser.accountUserDatasForTotoUser)
    })
    it('should return list of accounts for valid user Id', async () => {
      const result = await accountUserAdapter.getByUserId('fabrizioUser')
      expect(result).toEqual(accountUser.accountUserDatasForFabrizioUser)
    })
    it('should return [] for inexistant user Id', async () => {
      const result = await accountUserAdapter.getByUserId('inexistantUser')
      expect(result).toEqual([])
    })
  })
  describe('getByProperty', () => {
    it('should retrieve account-user by its user Id', async () => {
      const result = await accountUserAdapter.getByProperty('userId', 'totoUser')
      // console.log(
      //   'adapters/generic/accountUser.test - : type of getByProperty',
      //   typeof accountUserAdapter.getByProperty
      // )
      expect(result).toEqual(accountUser.accountUserDatasForTotoUser)
    })
    it('should retrieve account-user by its account Id', async () => {
      const result = await accountUserAdapter.getByProperty('accountId', 'flexupAccount')
      expect(result).toEqual(accountUser.accountUserDatasForFlexupAccount)
    })
    it('should retrieve entities based on a property and its value', async () => {
      const results = await accountUserAdapter.getByProperty('role', 'guest')
      expect(results).toEqual([accountUser.pizzaDOroTakeAwayAccountFabrizioUserData])
    })
  })
})
