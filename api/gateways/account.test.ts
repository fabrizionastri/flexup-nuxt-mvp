import { agroCoopAccount } from './../../mock/inMemory/account'
import * as mock from 'mock/inMemory'
import { computeAccount, createAccountGateway } from './account'
import type { AccountData } from 'lib/entities'

let accountGateway: any

describe('accountGateway', () => {
  describe('computeAccount', () => {
    it('individual account - should compute account for valid account Id', async () => {
      const result = await computeAccount(
        mock.fabrizioAccountData,
        mock.accountDatasForFabrizioUser
      )
      const expected = { ...mock.fabrizioAccount, role: 'owner' }
      expect(result).toEqual(expected)
    })
    it('individual account / no allAccountUserDatas provide- should set role to undefined', async () => {
      const result = await computeAccount(mock.fabrizioAccountData)
      const expected = { ...mock.fabrizioAccount }
      expect(result).toEqual(expected)
    })
    it('business account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.cosysAccountData, mock.accountDatasForFabrizioUser)
      const expected = { ...mock.cosysAccount, role: 'owner' }
      expect(result).toEqual(expected)
    })
    it('shared account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.doMazyAccountData, mock.accountDatasForFabrizioUser)
      const expected = { ...mock.doMazyAccount, role: 'guest' }
      expect(result).toEqual(expected)
    })
    it('project account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.flexupAccountData, mock.accountDatasForFabrizioUser)
      const expected = { ...mock.flexupAccount, role: 'owner' }
      expect(result).toEqual(expected)
    })
    it('invalid account - should throw error for an invalid account', async () => {
      const invalidAccountData = { ...mock.flexupAccountData, ownerId: 'inexistantAccount' }
      await expect(
        computeAccount(invalidAccountData, mock.accountDatasForFabrizioUser)
      ).rejects.toThrowError()
    })
    it('should return computed account but with no role if user is not a member of this account', async () => {
      const result = await computeAccount(
        mock.agroCoopAccountData,
        mock.accountDatasForFabrizioUser
      )
      const expected = mock.agroCoopAccount
      expect(result).toEqual(expected)
    })
    it('foreign account - should return [] if user is not a member of this account', async () => {
      const result = await computeAccount(mock.agroCoopAccountData)
      const expected = mock.agroCoopAccount
      expect(result).toEqual(expected)
      //   console.log('api/gateways/account - computeAccount.test - result:', result)
      //   await expect(
      //     computeAccount(mock.agroCoopAccountData, accountDatasForFabrizioUser)
      //   ).rejects.toThrowError()
    })
    it('invalid owner - should throw error if ownerId is invalid', async () => {
      const accountData = { ...mock.agroCoopAccountData, ownerId: 'invalid' }
      await expect(computeAccount(accountData)).rejects.toThrowError()
    })
    it('invalid country - should throw error if ownerId is invalid', async () => {
      const accountData = { ...mock.agroCoopAccountData, countryId: 'invalid' }
      await expect(computeAccount(accountData)).rejects.toThrowError()
    })
    it('invalid currency - should throw error if ownerId is invalid', async () => {
      const accountData = { ...mock.agroCoopAccountData, currencyId: 'invalid' }
      await expect(computeAccount(accountData)).rejects.toThrowError()
    })
    it('invalid currency - should throw error if ownerId is invalid', async () => {
      const accountData: AccountData = { ...agroCoopAccount, type: 'personal' }
      await expect(computeAccount(accountData)).rejects.toThrowError()
    })
  })
  describe('gateway methods', () => {
    beforeAll(async () => {
      accountGateway = await createAccountGateway('fabrizioUser')
    })
    describe('getById', () => {
      it('should return an account for a valid accountId', async () => {
        const result = await accountGateway.getById('fabrizioAccount')
        expect(result).toEqual({ ...mock.fabrizioAccount, role: 'owner' })
      })
      it('should return undefined for an invalid accountId', async () => {
        const result = await accountGateway.getById('invalid')
        expect(result).toBeUndefined()
      })
      it('should throw error for invalid userId', async () => {
        await expect(createAccountGateway('invalid')).rejects.toThrowError()
      })
    })
    describe('getAllAccounts', () => {
      it('should return all accounts for valid user id', async () => {
        const result = await accountGateway.getAllAccounts()
        const expected = mock.accountsForFabrizioUser
        expect(new Set(result)).toEqual(new Set(expected))
      })
    })
  })
})
