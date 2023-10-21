import { credentialAdapter } from './credential'
import * as credentials from 'mock/inMemory/credential'

describe('credentialAdapter', () => {
  describe('getById', () => {
    it('should return credential for valid crentialId', async () => {
      const result = await credentialAdapter.getById('totoUsernameCredential')
      const expecte = credentials.totoUsernameCredentialData
      expect(result).toEqual(expecte)
    })
  })
  describe('getByProperty', () => {
    it('should return entities that match both properties when using "and"', async () => {
      const result = await credentialAdapter.getByProperty('userId', 'totoUser')
      const expecte = credentials.totoCredentialDatas
      expect(result).toEqual(expecte)
    })
  })
  describe('getByUserId', () => {
    it('should return entities that match both properties when using "and"', async () => {
      const result = await credentialAdapter.getByUserId('totoUser')
      const expected = credentials.totoCredentialDatas
      expect(result).toEqual(expected)
    })
  })
})
