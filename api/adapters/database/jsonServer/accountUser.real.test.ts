/* NOTE : we have created a generic accountUserAdapter, so no need to create one
specifically for jsonServer. This here is just a test to check that the generic
methods work as expected.
*/

import * as accountUser from 'mock/inMemory/accountUser'

import type { AccountUserData } from 'lib/entities'
import type { AccountUserAdapter } from '../interfaces'
import * as adapterMethods from './methods'

export const accountUserAdapter: AccountUserAdapter = {
  getById: adapterMethods.createGetById<AccountUserData>('accountUser'),
  getByUserId: adapterMethods.createGetBySelectedProperty('accountUser', 'userId'),
  getByProperty: adapterMethods.createGetByProperty('accountUser')
}

describe('-> accountUser', () => {
  describe('getById', () => {
    it('should retrieve account-user by its user Id', async () => {
      const result = await accountUserAdapter.getById('totoAccountTotoUser')
      expect(result).toEqual(accountUser.totoAccountTotoUserData)
    })
  })
  describe('getByUserId', () => {
    it('should return list of accounts for valid user Id', async () => {
      const result = await accountUserAdapter.getByUserId('totoUser')
      expect(result).toEqual(accountUser.accountUserDatasForTotoUser)
    })
    it('should return [] for inexistant user Id', async () => {
      const result = await accountUserAdapter.getByUserId('inexistantUser')
      expect(result).toEqual([])
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
