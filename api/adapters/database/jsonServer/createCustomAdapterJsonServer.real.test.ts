import { flexupData } from 'mock/inMemory/account'
import { createCustomAdapterJsonServer } from './createCustomAdapterJsonServer'

const adapter = createCustomAdapterJsonServer('account')

describe('createCustomAdapterJsonServer - real Axios', () => {
  describe('getById', () => {
    it('should return an entity when called with id', async () => {
      const result = await adapter.getById('flexup')
      expect(result).toEqual(flexupData)
    })

    it('should return undefined for unknown item id', async () => {
      const result = await adapter.getById('unknown')
      expect(result).toBeUndefined()
    })
  })
  //
  //   describe('getByProperty', () => {
  //     it('should retrieve entities based on a property and its value', async () => {
  //       const results = await adapter.getByProperty('name', 'FlexUp')
  //       expect(results).toContain(flexupData)
  //     })
  //
  //     it('should return [] for unknown property value', async () => {
  //       const result = await adapter.getByProperty('name', 'unknown')
  //       expect(result).toEqual([])
  //     })
  //   })
})
