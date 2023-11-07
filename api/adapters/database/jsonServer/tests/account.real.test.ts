import { flexupAccountData } from 'mock/inMemory/account'
import { accountAdapter } from './account'

// dates in JSON are stringified, but not in memory, so we need to stringify the date for the test to pass
const expected = {
  ...flexupAccountData
  // creationDate: new Date(flexupData.creationDate).toISOString()
}

describe('createGenericAdapter - real Axios', () => {
  describe('getById', () => {
    it('should return an entity when called with id', async () => {
      const result = await accountAdapter.getById('flexupAccount')
      expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })

    it('should return undefined for unknown item id', async () => {
      const result = await accountAdapter.getById('unknown')
      expect(result).toBeUndefined()
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await accountAdapter.getByProperty('name', 'FlexUp')
      expect(JSON.stringify(results)).toContain(JSON.stringify(expected))
    })

    it('should return [] for unknown property value', async () => {
      const result = await accountAdapter.getByProperty('name', 'unknown')
      expect(result).toEqual([])
    })
  })
})
