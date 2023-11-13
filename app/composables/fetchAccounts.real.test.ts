// app/composables/fetchAccounts.real.test.ts

import { createPinia, setActivePinia } from 'pinia'
import { sortById } from '../../lib/utils'
import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'
import * as mock from '../../mock/inMemory'
import { useAccountStore } from '../store/useAccountStore'

describe('app/composable/fetchAccounts', () => {
  let accountStore
  beforeEach(() => {
    setActivePinia(createPinia())
    accountStore = useAccountStore()
  })
  describe('with default account status (["active"])', () => {
    it('should return the list all accounts for user when valid token is provided', async () => {
      const token = mock.totoUserToken
      const result = await accountStore.fetchAccounts(token)
      // console.log('► app/composables/fetchAccounts.real.test - result:', result)
      const expected = mock.accountsForTotoUser
      expect(sortById(convertStringsToDates(result))).toEqual(sortById(expected))
    })
    it('should return an error message user when invalid token is provided', async () => {
      const token = 'invalid'
      await expect(accountStore.fetchAccounts(token)).rejects.toThrowError('Invalid token')
    })
  })
  describe('with specific account status', () => {
    it('should return the list all active accounts for user when valid token and "active" status is provided', async () => {
      const token = mock.fabrizioUserToken
      const result = await accountStore.fetchAccounts(token, ['active'])
      const expected = mock.activeAccountsForFabrizioUser
      expect(sortById(convertStringsToDates(result))).toEqual(sortById(expected))
    })
    it('should return an error message user when invalid credentials are provided', async () => {
      const token = 'invalid'
      await expect(accountStore.fetchAccounts(token, ['active'])).rejects.toThrowError(
        'Invalid token'
      )
    })
  })
})
