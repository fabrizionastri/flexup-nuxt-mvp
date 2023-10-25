import * as identifiers from 'mock/inMemory/identifier'
import * as passwords from 'mock/inMemory/password'
import { totoUser } from 'mock/inMemory/user'
import { login } from './login'

describe('login', () => {
  it('should return a computed user when valid credentials are provided', async () => {
    const identifier = identifiers.totoUsernameIdentifierData.id
    const password = passwords.totoUserPasswordData.password
    const result = await login(identifier, password)
    const expected = totoUser
    expect(result).toEqual(expected)
  })
  it('should throw an error when invalid password is provided', async () => {
    const identifier = identifiers.totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    await expect(login(identifier, password)).rejects.toThrowError('Invalid password')
  })
  it('should throw an error when invalid identifier is provided', async () => {
    const identifier = 'invalidIdentifier'
    const password = passwords.totoUserPasswordData.password
    await expect(login(identifier, password)).rejects.toThrowError('Invalid identifier')
  })
  it('should throw an error when falsy identified is provided', async () => {
    const identifier = ''
    const password = passwords.totoUserPasswordData.password
    await expect(login(identifier, password)).rejects.toThrowError(
      'Missing identifier (username, email or phone)'
    )
  })
  it('should throw an error when falsy password is provided', async () => {
    const identifier = identifiers.totoUsernameIdentifierData.id
    const password = ''
    await expect(login(identifier, password)).rejects.toThrowError('Missing password')
  })
})
