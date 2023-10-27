import { franceData } from 'mock/inMemory/country'
import { countryAdapter } from './country'

describe('country adapter', () => {
  describe('getById', () => {
    it('should return an country data for existing country Id', async () => {
      const result = await countryAdapter.getById('FRA')
      const expected = franceData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant country Id', async () => {
      const result = await countryAdapter.getById('inexistantCountry')
      expect(result).toBeUndefined()
    })
  })
})
