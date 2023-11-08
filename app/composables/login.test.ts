import * as mock from '../../mock/inMemory'
import { login } from './login'

describe('app/composable/login', () => {
  it('should return a token when valid credentials are provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = mock.totoUserPasswordData.password
    const result = await login(identifier, password)
    const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0b3RvVXNlciIsI'
    expect(result.slice(0, 60)).toEqual(expected.slice(0, 60))
  })
  it('should return an error message user when invalid credentials are provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    const result = await login(identifier, password)
    const expected = {
      error: 'Invalid password'
    }
    expect(result).toEqual(expected)
  })
})
