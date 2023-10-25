import { individualAdapter } from './individual'
import { fabrizioIndividualData } from 'mock/inMemory'

describe('individual adapter', () => {
  describe('getById', () => {
    it('should return an individual data for existing Id', async () => {
      const result = await individualAdapter.getById('fabrizioIndividual')
      const expected = fabrizioIndividualData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await individualAdapter.getById('inexistantId')
      expect(result).toBeUndefined()
    })
  })
  describe('getByUserId', () => {
    it('should return an individual for a valid userId', async () => {
      const result = await individualAdapter.getByUserId('fabrizioUser')
      const expected = fabrizioIndividualData
      expect(result).toEqual(expected)
    })
  })
})
