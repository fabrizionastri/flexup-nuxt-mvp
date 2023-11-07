import { franceData, swissData } from 'mock/inMemory'
import { countryAdapter } from './country'

describe('country adapter', () => {
  describe('getById', () => {
    it('should return an country data for existing country Id', async () => {
      const result = await countryAdapter.getById('FRA')
      const expected = franceData
      expect(result).toEqual(expected)
    })
    it('should return an country data for existing country Id', async () => {
      const result = await countryAdapter.getById('CHE')
      const expected = swissData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant country Id', async () => {
      const result = await countryAdapter.getById('inexistantCountry')
      expect(result).toBeUndefined()
    })
  })
})
