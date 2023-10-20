import { createGenericAdapterInMemory } from './genericAdapterInMemory'
import { totoUserData, pendingUserData } from 'mock/inMemory/user'

describe('-> user', () => {
  const userAdapter = createGenericAdapterInMemory('user')
  describe('getById', () => {
    it('should retrieve an entity by its ID', async () => {
      const result = await userAdapter.getById('totoUser')
      expect(result).toEqual(totoUserData)
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await userAdapter.getByProperty('status', 'pending')
      expect(results).toContain(pendingUserData)
    })
  })
})
