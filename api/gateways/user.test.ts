import { computeUser, userGateway } from './user'
import {
  totoUserPasswordData,
  totoUsernameIdentifierData,
  totoUser,
  fabrizioUser,
  fabrizioUserData
} from 'mock/inMemory'

describe('userGateway', () => {
  describe('compute user', () => {
    it('should compute a user when valid userData is provided', async () => {
      const result = await computeUser(fabrizioUserData)
      const expected = fabrizioUser
      expect(result).toEqual(expected)
    })
    it('should return undefined it no valid userID is provided', async () => {
      const user = { ...fabrizioUserData, id: 'plop' }
      await expect(computeUser(user)).rejects.toThrowError('Individual not found')
    })
  })
  describe('getById', () => {
    it('should return a computed user when valid user Id ', async () => {
      const userId = fabrizioUser.id
      expect(await userGateway.getById(userId)).toEqual(fabrizioUser)
    })
    it('should throw an error when invalid user Id is provided', async () => {
      const userId = 'prout'
      await expect(userGateway.getById(userId)).rejects.toThrowError('ser not found')
    })
    it('should throw an error when falsy password is provided', async () => {
      const identifier = totoUsernameIdentifierData.id
      const password = ''
      await expect(userGateway.login(identifier, password)).rejects.toThrowError('Invalid password')
    })
  })
  describe('login', () => {
    it('should return a computed user when valid credentials are provided', async () => {
      const identifier = totoUsernameIdentifierData.id
      const password = totoUserPasswordData.password
      expect(await userGateway.login(identifier, password)).toEqual(totoUser)
    })
    it('should throw an error when invalid password is provided', async () => {
      const identifier = totoUsernameIdentifierData.id
      const password = 'invalidPassword'
      await expect(userGateway.login(identifier, password)).rejects.toThrowError('Invalid password')
    })
    it('should throw an error when invalid identifier is provided', async () => {
      const identifier = 'invalidIdentifier'
      const password = totoUserPasswordData.password
      await expect(userGateway.login(identifier, password)).rejects.toThrowError(
        'Invalid identifier'
      )
    })
    it('should throw an error when falsy identified is provided', async () => {
      const identifier = ''
      const password = totoUserPasswordData.password
      await expect(userGateway.login(identifier, password)).rejects.toThrowError(
        'Invalid identifier'
      )
    })
    it('should throw an error when falsy password is provided', async () => {
      const identifier = totoUsernameIdentifierData.id
      const password = ''
      await expect(userGateway.login(identifier, password)).rejects.toThrowError('Invalid password')
    })
  })
})
