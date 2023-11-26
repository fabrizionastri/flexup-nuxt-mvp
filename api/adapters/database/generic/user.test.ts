import { userAdapter } from './user'
import * as users from 'mock/inMemory/user'

describe('user adapter', () => {
  describe('getById', () => {
    it('should return an account for an existing Id', async () => {
      const result = await userAdapter.getById('totoUser')
      expect(result).toEqual(users.totoUserData)
    })
    it('should return undefined for an inexisting Id', async () => {
      const result = await userAdapter.getById('inexistantId')
      expect(result).toBeUndefined()
    })
  })

  describe('getByProperty', () => {
    it('should return list of accounts by status', async () => {
      const results = await userAdapter.getByProperty('status', 'pending')
      expect(results).toEqual([users.pendingUserData])
    })
  })
})
