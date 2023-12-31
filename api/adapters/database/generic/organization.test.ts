import { organizationAdapter } from './organization'
import { cosysOrganizationData } from 'mock/inMemory'

describe('organization adapter', () => {
  describe('getById', () => {
    it('should return an organization data for existing Id', async () => {
      const result = await organizationAdapter.getById('cosysOrganization')
      const expected = cosysOrganizationData
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant Id', async () => {
      const result = await organizationAdapter.getById('inexistantId')
      expect(result).toBeUndefined()
    })
  })
})
