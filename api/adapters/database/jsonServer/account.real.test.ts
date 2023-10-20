import { flexupAccountData } from 'mock/inMemory/account'
import { createGenericAdapter } from './generic'

const adapter = createGenericAdapter('account')

// dates in JSON are stringified, but not in memory, so we need to stringify the date for the test to pass
const expected = {
  ...flexupAccountData
  // creationDate: new Date(flexupData.creationDate).toISOString()
}

describe('createGenericAdapter - real Axios', () => {
  describe('getById', () => {
    it('should return an entity when called with id', async () => {
      const result = await adapter.getById('flexupAccount')
      expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
    })

    it('should return undefined for unknown item id', async () => {
      const result = await adapter.getById('unknown')
      expect(result).toBeUndefined()
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await adapter.getByProperty('name', 'FlexUp')
      expect(JSON.stringify(results)).toContain(JSON.stringify(expected))
    })
    //
    //     it('should return [] for unknown property value', async () => {
    //       const result = await adapter.getByProperty('name', 'unknown')
    //       expect(result).toEqual([])
    //     })
  })
})
