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
})
