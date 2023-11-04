import * as identifiers from '../../mock/inMemory/identifier'
import * as passwords from '../../mock/inMemory/password'
import { totoUser } from '../../mock/inMemory/user'
import { login } from './login'

describe('app/composable/login', () => {
  it('should return a computed user when valid credentials are provided', async () => {
    const identifier = identifiers.totoUsernameIdentifierData.id
    const password = passwords.totoUserPasswordData.password
    const result = await login(identifier, password)
    const expected = totoUser
    expect(result).toEqual(expected)
  })
  it('should return an error message user when invalid credentials are provided', async () => {
    const identifier = identifiers.totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    const result = await login(identifier, password)
    // console.log('app/composables/login.test.ts - result:', result)
    const expected = {
      error: 'Invalid password'
    }
    expect(result).toEqual(expected)
  })
})
