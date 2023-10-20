import { totoUsernameCredentialData } from 'mock/inMemory/credential'
import { totoUser } from 'mock/inMemory/user'
import { login } from './login'

describe('login', () => {
  it('should return user when valid credentials are provided', async () => {
    const credentials = totoUsernameCredentialData
    const result = await login()
    const expected = totoUser
    expect(result).toEqual(expected)
  })
})
