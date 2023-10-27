import * as mock from 'mock/inMemory'
import { computeAccount, createAccountGateway } from './account'

const accountGateway = createAccountGateway('fabrizioUser')

describe('accountGateway', () => {
  it('should return a gateway for a given userId', () => {
    expect(accountGateway).toBeDefined()
  })
  describe('computeAccount', () => {
    it('individual account - should compute account for valid account Id', async () => {
      // console.log('api/gateways/account - computeAccount.test - start')
      const result = await computeAccount(mock.fabrizioAccountData)
      // console.log('api/gateways/account - computeAccount.test - result:', result)
      const expected = mock.fabrizioAccount
      expect(result).toEqual(expected)
    })
    it('business account - should compute account for valid account Id', async () => {
      // console.log('api/gateways/account - computeAccount.test - start')
      const result = await computeAccount(mock.cosysAccountData)
      // console.log('api/gateways/account - computeAccount.test - result:', result)
      const expected = mock.cosysAccount
      expect(result).toEqual(expected)
    })
    it('shared account - should compute account for valid account Id', async () => {
      // console.log('api/gateways/account - computeAccount.test - start')
      const result = await computeAccount(mock.doMazyAccountData)
      // console.log('api/gateways/account - computeAccount.test - result:', result)
      const expected = mock.doMazyAccount
      expect(result).toEqual(expected)
    })
    it('project account - should compute account for valid account Id', async () => {
      // console.log('api/gateways/account - computeAccount.test - start')
      const result = await computeAccount(mock.flexupAccountData)
      // console.log('api/gateways/account - computeAccount.test - result:', result)
      const expected = mock.flexupAccount
      expect(result).toEqual(expected)
    })
    it('invalid account - should throw error for an invalid account', async () => {
      const invalidAccountData = { ...mock.flexupAccountData, ownerId: 'inexistantAccount' }
      await expect(computeAccount(invalidAccountData)).rejects.toThrowError()
    })
    it('foreign account - should throw error for account whose user is not a member', async () => {
      // const result = await computeAccount(agroCoopAccountData)
      // const expected = agroCoopAccount
      // expect(result).toEqual(expected)
      // console.log('api/gateways/account - computeAccount.test - result:', result)
      await expect(computeAccount(mock.agroCoopAccountData)).rejects.toThrowError()
    })
  })
  // describe('getAll', () => {
  //   it('should return a list of computed accounts for valid userId', async () => {
  //     const result = await accountGateway.getAll()
  //     console.log('account.test.ts - result:', result)
  //     const expected = 1
  //     expect(result).toEqual(expected)
  //   })
  // })
})
