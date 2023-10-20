import { createGenericAdapterInMemory } from './genericAdapterInMemory'
import { fabrizioAccountData } from 'mock/inMemory/account'
import { totoUserData, pendingUserData } from 'mock/inMemory/user'
import * as accountUser from 'mock/inMemory/accountUser'

describe('-> account', () => {
  const accountAdapter = createGenericAdapterInMemory('account')

  describe('getById', () => {
    it('should retrieve an entity by its ID', async () => {
      const result = await accountAdapter.getById('fabrizioAccount')
      expect(result).toEqual(fabrizioAccountData)
    })

    it('should return undefined for a non-existent ID', async () => {
      const result = await accountAdapter.getById('nonExistentId')
      expect(result).toBeUndefined()
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await accountAdapter.getByProperty('ownerType', 'individual')
      expect(results).toContain(fabrizioAccountData)
    })

    it('should return an empty array if no entities match the criteria', async () => {
      const results = await accountAdapter.getByProperty('ownerType', 'nonExistentOwnerType')
      expect(results).toEqual([])
    })

    it('should return an error if no property matches the property name provided', async () => {
      await expect(
        accountAdapter.getByProperty('nonExistentProperty', 'nonExistentValue')
      ).rejects.toThrowError()
    })
  })
})
describe('-> user', () => {
  const userAdapter = createGenericAdapterInMemory('user')
  describe('getById', () => {
    it('should retrieve an entity by its ID', async () => {
      const result = await userAdapter.getById('totoUser')
      expect(result).toEqual(totoUserData)
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await userAdapter.getByProperty('status', 'pending')
      expect(results).toContain(pendingUserData)
    })
  })
})
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
