import * as mock from '../../mock/inMemory'
import { fetchToken } from './'

describe('app/composable/fetchToken', () => {
  it('should return a token when valid credentials are provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = mock.totoUserPasswordData.password
    const result = await fetchToken(identifier, password)
    if (!result) {
      console.log('► app/composables/login/fetchToken - error:', result)
      return
    }
    const expected = mock.totoUserToken
    expect(result.slice(0, 60)).toEqual(expected.slice(0, 60))
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    const result = await fetchToken(identifier, password)
    const expected = {
      error: 'Invalid password'
    }
    expect(result).toEqual(expected)
  })
  it('should return an error when invalid identifier is provided', async () => {
    const identifier = 'invalid'
    const password = mock.totoUserPasswordData.password
    const result = await fetchToken(identifier, password)
    const expected = {
      error: 'Invalid identifier'
    }
    expect(result).toEqual(expected)
  })
})
