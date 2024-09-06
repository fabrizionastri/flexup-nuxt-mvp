import { sortById } from './../../lib/utils/sortById'
import { agroCoopAccount } from './../../mock/inMemory/account'
import * as mock from 'mock/inMemory'
import { accountsForFabrizioUser } from 'mock/inMemory/member'
import { computeAccount, createAccountGateway, getAccountDatas } from './account'
import type { AccountData } from 'lib/entities'

let accountGateway: any

describe('accountGateway', () => {
  describe('computeAccount', () => {
    it('individual account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.fabrizioAccountData, mock.memberDatasForFabrizioUser)
      const expected = { ...mock.fabrizioAccount, currentUserRole: 'admin', roleSymbol: '🔑' }
      expect(result).toEqual(expected)
    })
    it('individual account / no allMemberDatas provided - should set role to undefined', async () => {
      const result = await computeAccount(mock.fabrizioAccountData)
      const expected = { ...mock.fabrizioAccount }
      expect(result).toEqual(expected)
    })
    it('business account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.cosysAccountData, mock.memberDatasForFabrizioUser)
      const expected = { ...mock.cosysAccount, currentUserRole: 'admin', roleSymbol: '🔑' }
      expect(result).toEqual(expected)
    })
    it('shared account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.doMazyAccountData, mock.memberDatasForFabrizioUser)
      const expected = { ...mock.doMazyAccount, currentUserRole: 'editor', roleSymbol: '✏️' }
      expect(result).toEqual(expected)
    })
    it('subaccount account - should compute account for valid account Id', async () => {
      const result = await computeAccount(mock.flexupAccountData, mock.memberDatasForFabrizioUser)
      const expected = { ...mock.flexupAccount, currentUserRole: 'admin', roleSymbol: '🔑' }
      expect(result).toEqual(expected)
    })
    it('invalid account - should throw error for an invalid account', async () => {
      const invalidAccountData = { ...mock.flexupAccountData, ownerId: 'inexistantAccount' }
      await expect(
        computeAccount(invalidAccountData, mock.memberDatasForFabrizioUser)
      ).rejects.toThrowError()
    })
    it('should return computed account but with no role if user is not a member of this account', async () => {
      const result = await computeAccount(mock.agroCoopAccountData, mock.memberDatasForFabrizioUser)
      const expected = mock.agroCoopAccount
      expect(result).toEqual(expected)
    })
    it('foreign account - should return [] if user is not a member of this account', async () => {
      const result = await computeAccount(mock.agroCoopAccountData)
      const expected = mock.agroCoopAccount
      expect(result).toEqual(expected)
      //   console.log('api/gateways/account - computeAccount.test - result:', result)
      //   await expect(
      //     computeAccount(mock.agroCoopAccountData, memberDatasForFabrizioUser)
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
  describe('getAccountDatas', () => {
    it('should return account datas for valid account ids', async () => {
      const result = await getAccountDatas(['fabrizioAccount', 'cosysAccount', 'totoAccount'])
      const expected = [mock.fabrizioAccountData, mock.cosysAccountData, mock.totoAccountData]
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return active account datas for valid account ids and status filter', async () => {
      const result = await getAccountDatas(
        ['fabrizioAccount', 'cosysAccount', 'pizzaDOroTakeAwayAccount'],
        ['active']
      )
      const expected = [mock.fabrizioAccountData, mock.cosysAccountData]
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return all account datas for valid account ids and status filter', async () => {
      const result = await getAccountDatas(
        ['plop', 'fabrizioAccount', 'pizzaDOroTakeAwayAccount'],
        ['pending']
      )
      const expected = [mock.pizzaDOroTakeAwayAccountData]
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return [] for invalid account ids', async () => {
      const result = await getAccountDatas(['invalid'])
      const expected: AccountData[] = []
      expect(result).toEqual(expected)
    })
    it('should return [] for invalid account ids and status filter', async () => {
      const result = await getAccountDatas(['invalid'], ['active'])
      const expected: AccountData[] = []
      expect(result).toEqual(expected)
    })
  })
  describe('gateway methods', () => {
    beforeAll(async () => {
      accountGateway = await createAccountGateway('fabrizioUser')
    })
    describe('getById', () => {
      it('should return an account for a valid accountId', async () => {
        const result = await accountGateway.getById('fabrizioAccount')
        expect(result).toEqual({
          ...mock.fabrizioAccount,
          currentUserRole: 'admin',
          roleSymbol: '🔑'
        })
      })
      it('should return undefined for an invalid accountId', async () => {
        const result = await accountGateway.getById('invalid')
        expect(result).toBeUndefined()
      })
      it('should throw error for invalid userId', async () => {
        await expect(createAccountGateway('invalid')).rejects.toThrowError()
      })
    })
    describe('getAccounts', () => {
      describe('no status filter', () => {
        it('should return all accounts for valid user id', async () => {
          const result = await accountGateway.getAccounts()
          const expected = accountsForFabrizioUser
          expect(sortById(result)).toEqual(sortById(expected))
        })
      })
      describe('with status filter', () => {
        it('should return active accounts for valid user id', async () => {
          const result = await accountGateway.getAccounts(['active'])
          const expected = mock.activeAccountsForFabrizioUser
          expect(sortById(result)).toEqual(sortById(expected))
        })
        it('should return pending accounts for valid user id', async () => {
          const result = await accountGateway.getAccounts(['pending'])
          const expected = [mock.pizzaDOroTakeAwayAccountFabrizioUser]
          expect(sortById(result)).toEqual(sortById(expected))
        })
      })
    })
  })
})
