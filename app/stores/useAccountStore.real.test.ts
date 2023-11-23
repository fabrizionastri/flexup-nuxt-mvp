// app/composables/fetchAccounts.real.test.ts

import { createPinia, setActivePinia } from 'pinia'
import { sortById } from '../../lib/utils'
import { convertStringsToDates } from '../../lib/utils'
import * as mock from '../../mock/inMemory'
import { useAccountStore } from './useAccountStore'

describe('app/stores/useAccountStore.real', () => {
  describe('fetchAccounts', () => {
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
  describe('fetchAndUpdateActiveAccounts', () => {
    let accountStore
    beforeEach(() => {
      setActivePinia(createPinia())
      accountStore = useAccountStore()
    })
    describe('with valid token', async () => {
      beforeEach(async () => {
        const token = mock.totoUserToken
        await accountStore.fetchAndUpdateActiveAccounts(token)
      })
      it('should update the value of activeAccounts', async () => {
        const result = accountStore.activeAccounts
        const expected = mock.accountsForTotoUser
        expect(sortById(convertStringsToDates(result))).toEqual(sortById(expected))
      })
      it('should update the value of currentAccount', async () => {
        const result = accountStore.currentAccount
        const expected = mock.accountsForTotoUser.find((account) => account.type === 'personal')
        expect(convertStringsToDates(result)).toEqual(expected)
      })
    })
    describe('with invalid token)', async () => {
      it('should update the value of activeAccounts', async () => {
        const token = 'invalid'
        await expect(accountStore.fetchAndUpdateActiveAccounts(token)).rejects.toThrowError()
      })
    })
  })
  describe('getAccount', () => {
    describe('for an active account', () => {
      let accountStore
      let token
      beforeEach(async () => {
        setActivePinia(createPinia())
        accountStore = useAccountStore()
        token = mock.fabrizioUserToken
        await accountStore.fetchAndUpdateActiveAccounts(token)
      })
      it('should return an account from active list without a token', async () => {
        const received = await accountStore.getAccount('fabrizioAccount')
        const expected = mock.accountsForFabrizioUser.find(
          (account) => account.id === 'fabrizioAccount'
        )
        expect(convertStringsToDates(received)).toEqual(expected)
      })
      it('should return an account from active list with a token', async () => {
        const received = await accountStore.getAccount('cosysAccount', token)
        const expected = mock.accountsForFabrizioUser.find(
          (account) => account.id === 'cosysAccount'
        )
        expect(convertStringsToDates(received)).toEqual(expected)
      })
      it('should throw an error for a pending account, without an allAccount list, and without a token', async () => {
        await expect(accountStore.getAccount('pizzaDOroTakeAwayAccount')).rejects.toThrowError()
      })
      it('should return a pending account, if provided with a valid token', async () => {
        const received = await accountStore.getAccount('pizzaDOroTakeAwayAccount', token)
        const expected = mock.accountsForFabrizioUser.find(
          (account) => account.id === 'pizzaDOroTakeAwayAccount'
        )
        expect(convertStringsToDates(received)).toEqual(expected)
      })
      it('should throw an error if provided with a valid token', async () => {
        await expect(
          accountStore.getAccount('pizzaDOroTakeAwayAccount', 'invalid')
        ).rejects.toThrowError()
      })
    })
  })
})
