import { credentialAdapter } from './credential'
import * as credentials from 'mock/inMemory/credential'

describe('credentialAdapter', () => {
  describe('checkCredentials', () => {
    it('should return userId for valid credentials ', async () => {
      const result = await credentialAdapter.checkCredentials('totoUsername', 'plop')
      const expected = credentials.totoUsernameCredentialData.userId
      expect(result).toEqual(expected)
    })
    it('should throw an error for invalid credentials', async () => {
      await expect(
        credentialAdapter.checkCredentials('totoUsername', 'wrong password')
      ).rejects.toThrowError('Invalid credentials')
    })
  })
})
