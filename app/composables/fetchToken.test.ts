// app/composables/fetchToken.test.ts

import * as mock from '../../mock/inMemory'
import { fetchToken } from './fetchToken'

describe('app/composable/fetchToken', () => {
  it('should return a token when valid credentials are provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = mock.totoUserPasswordData.password
    // console.log('► app/composables/login/fetchToken.test - credentials:', identifier, password)
    const result = await fetchToken(identifier, password)
    // console.log('► app/composables/login/fetchToken.test - result:', result)
    const expected = mock.totoUserToken
    expect(result.slice(0, 60)).toEqual(expected.slice(0, 60))
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    await expect(fetchToken(identifier, password)).rejects.toThrow()
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = 'invalid'
    const password = mock.totoUserPasswordData.password
    await expect(fetchToken(identifier, password)).rejects.toThrowError('Invalid identifier')
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = 'invalid'
    await expect(fetchToken(identifier, password)).rejects.toThrowError('Invalid password')
  })
})
