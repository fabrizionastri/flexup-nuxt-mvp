import * as users from 'mock/inMemory/user'
import { computeUser } from './user'

describe('userGateway', () => {
  describe('compute user', () => {
    it('should compute a user when valid userData is provided', async () => {
      const result = await computeUser(users.fabrizioUserData)
      const expected = users.fabrizioUser
      expect(result).toEqual(expected)
    })
    it('should return undefined it no valid userID is provided', async () => {
      const user = { ...users.fabrizioUserData, id: 'plop' }
      await expect(computeUser(user)).rejects.toThrowError('Individual not found')
    })
  })
})
