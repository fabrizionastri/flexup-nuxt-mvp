import { createGenericAdapterInMemory } from './genericAdapterInMemory'
import { fabrizioAccountData } from 'mock/inMemory/account'

describe('accountAdapterInMemory (based on generic adapter)', () => {
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
