import { accountAdapter } from '.'
import { fabrizioAccountData } from 'mock/inMemory/account'

describe('accountAdapter (based on generic adapter)', () => {
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
      const results = await accountAdapter.getByProperty('type', 'personal')
      expect(results).toContain(fabrizioAccountData)
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
