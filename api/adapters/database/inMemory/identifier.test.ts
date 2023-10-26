import { identifierAdapter } from './identifier'
import * as identifiers from 'mock/inMemory'

describe('identifierAdapter', () => {
  describe('getUserId', () => {
    it('should return userId for valid identifier ', async () => {
      const result = await identifierAdapter.getUserId('totoUsername')
      const expected = identifiers.totoUsernameIdentifierData.userId
      expect(result).toEqual(expected)
    })
    it('should throw an error for invalid identifier', async () => {
      await expect(identifierAdapter.getUserId('plop')).rejects.toThrowError(
        'createIdentifierAdapter -> Invalid identifier'
      )
    })
  })
})
