import { totoUsernameIdentifierData } from 'mock/inMemory/identifier'
import { totoUserPasswordData } from 'mock/inMemory/password'
import { totoUser } from 'mock/inMemory/user'
import { login } from './login'

describe('login', () => {
  it('should return a computed user when valid credentials are provided', async () => {
    const identifier = totoUsernameIdentifierData.id
    const password = totoUserPasswordData.password
    expect(await login(identifier, password)).toEqual(totoUser)
  })
  it('should throw an error when invalid password is provided', async () => {
    const identifier = totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    await expect(login(identifier, password)).rejects.toThrowError('Invalid password')
  })
  it('should throw an error when invalid identifier is provided', async () => {
    const identifier = 'invalidIdentifier'
    const password = totoUserPasswordData.password
    await expect(login(identifier, password)).rejects.toThrowError('Invalid identifier')
  })
  it('should throw an error when falsy identified is provided', async () => {
    const identifier = ''
    const password = totoUserPasswordData.password
    await expect(login(identifier, password)).rejects.toThrowError('Invalid identifier')
  })
  it('should throw an error when falsy password is provided', async () => {
    const identifier = totoUsernameIdentifierData.id
    const password = ''
    await expect(login(identifier, password)).rejects.toThrowError('Invalid password')
  })
})
