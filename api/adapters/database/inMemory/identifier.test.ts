import { identifierAdapter } from './identifier'
import { totoUsernameIdentifierData } from 'mock/inMemory'

describe('identifierAdapter', () => {
  describe('getUserId', () => {
    it('should return userId for valid identifier ', async () => {
      const result = await identifierAdapter.getUserId('totousername')
      const expected = totoUsernameIdentifierData.userId
      expect(result).toEqual(expected)
    })
    it('should throw an error for invalid identifier', async () => {
      await expect(() => identifierAdapter.getUserId('plop')).toThrowError('Invalid identifier')
    })
  })
})
