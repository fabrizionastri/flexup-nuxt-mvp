import { sortById } from 'lib/utils'
import { accountAdapter } from './account'
import { fabrizioAccountData, totoAccountData, pizzaDOroTakeAwayAccountData } from 'mock/inMemory'

describe('accountAdapter', () => {
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
  describe('getByIds', () => {
    it('should return list of accounts for valid list of accountIds', async () => {
      const result = await accountAdapter.getByIds(['fabrizioAccount', 'totoAccount'])
      expect(result).toEqual([fabrizioAccountData, totoAccountData])
    })
    it('should return list of accounts for valid ids, and ignore invalid ids', async () => {
      const result = await accountAdapter.getByIds([
        'fabrizioAccount',
        'totoAccount',
        'nonExistentId'
      ])
      expect(result).toEqual([fabrizioAccountData, totoAccountData])
    })
    it('should return valid account datas for mix of valid and invalid account ids', async () => {
      const result = await accountAdapter.getByIds([
        'plop',
        'fabrizioAccount',
        'pizzaDOroTakeAwayAccount'
      ])
      const expected = [fabrizioAccountData, pizzaDOroTakeAwayAccountData]
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return empty list if no valid ids are provided, and ignore invalid ids', async () => {
      const result = await accountAdapter.getByIds(['plopinette', 'nonExistentId'])
      expect(result).toEqual([])
    })
  })
  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await accountAdapter.getByProperty('type', 'personal')
      expect(results).toEqual([fabrizioAccountData, totoAccountData])
      // expect(results).toEqual(expect.arrayContaining([fabrizioAccountData]))
    })

    it('should return an empty array if no entities match the criteria', async () => {
      const results = await accountAdapter.getByProperty('ownerId', 'nonExistentOwner')
      expect(results).toEqual([])
    })

    it('should return an error if no property matches the property name provided', async () => {
      await expect(
        accountAdapter.getByProperty('nonExistentProperty', 'nonExistentValue')
      ).rejects.toThrowError()
    })
  })
})
