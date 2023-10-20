import { createGenericAdapterInMemory } from './genericAdapterInMemory'
import * as accountUser from 'mock/inMemory/accountUser'

describe('-> accountUser', () => {
  const accountUserAdapter = createGenericAdapterInMemory('accountUser')
  describe('getById', () => {
    it('should retrieve account-user by its user Id', async () => {
      const result = await accountUserAdapter.getById('totoAccountTotoUser')
      expect(result).toEqual(accountUser.totoAccountTotoUserData)
    })
  })

  describe('getByProperty', () => {
    it('should retrieve account-user by its user Id', async () => {
      const result = await accountUserAdapter.getByProperty('userId', 'totoUser')
      expect(result).toEqual(accountUser.accountUserDatasForTotoUser)
    })
    it('should retrieve account-user by its account Id', async () => {
      const result = await accountUserAdapter.getByProperty('accountId', 'flexupAccount')
      expect(result).toEqual(accountUser.accountUserDatasForFlexupAccount)
    })
    it('should retrieve entities based on a property and its value', async () => {
      const results = await accountUserAdapter.getByProperty('role', 'guest')
      expect(results).toEqual([accountUser.doMazyAccountFabrizioUserData])
    })
  })
})
