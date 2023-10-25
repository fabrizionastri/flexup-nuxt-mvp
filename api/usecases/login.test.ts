import * as identifiers from 'mock/inMemory/identifier'
import { totoUser } from 'mock/inMemory/user'
import { login } from './login'

describe.todo('login', () => {
  it('should return user when valid identifiers are provided', async () => {
    const identifier = identifiers.totoUsernameIdentifierData
    const result = await login()
    const expected = totoUser
    expect(result).toEqual(expected)
  })
})
