// app/composables/fetchToken.test.ts

import * as mock from '../../../mock/inMemory'
import { useUserStore } from '../'
import { createPinia, setActivePinia } from 'pinia'

describe('app/composable/fetchToken', () => {
  let userStore
  beforeEach(() => {
    setActivePinia(createPinia())
    userStore = useUserStore()
  })
  it('should return a token when valid credentials are provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = mock.totoUserPasswordData.password
    // console.log('► app/composables/login/fetchToken.test - credentials:', identifier, password)
    const result = await userStore.fetchToken(identifier, password)
    // console.log('► app/composables/login/fetchToken.test - result:', result)
    const expected = mock.totoUserToken
    expect(result.slice(0, 60)).toEqual(expected.slice(0, 60))
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = 'invalidPassword'
    await expect(userStore.fetchToken(identifier, password)).rejects.toThrow()
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = 'invalid'
    const password = mock.totoUserPasswordData.password
    await expect(userStore.fetchToken(identifier, password)).rejects.toThrowError(
      'Invalid identifier'
    )
  })
  it('should return an error when invalid password is provided', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = 'invalid'
    await expect(userStore.fetchToken(identifier, password)).rejects.toThrowError(
      'Invalid password'
    )
  })
})
