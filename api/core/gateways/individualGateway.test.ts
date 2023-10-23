import { fabrizioIndividual } from 'mock/inMemory/individual'
import { individualGateway } from './individualGateway'

describe('individual gateway', () => {
  describe('getById', () => {
    it('should return a computed individual for existing Id', async () => {
      const result = await individualGateway.getById('fabrizioIndividual')
      const expected = fabrizioIndividual
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await individualGateway.getById('inexistantId')
      expect(result).toBeUndefined()
    })
  })
})
