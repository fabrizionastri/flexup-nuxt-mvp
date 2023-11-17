import { anonymousUser, useUserStore } from './useUserStore'
import { convertStringsToDates } from '../../lib/utils'
import { createPinia, setActivePinia } from 'pinia'
import * as mock from '../../mock/inMemory'

describe('app/stores/userStore', () => {
  describe('fetchUser', () => {
    let userStore
    beforeEach(() => {
      setActivePinia(createPinia())
      userStore = useUserStore()
    })
    it('should return a user when valid token is provided', async () => {
      const token = mock.totoUserToken
      const result = convertStringsToDates(await userStore.fetchUser(token))
      const expected = mock.totoUser
      expect(result).toEqual(expected)
    })
    it('should return an error when invalid token is provided', async () => {
      const token = 'invalid'
      await expect(userStore.fetchUser(token)).rejects.toThrowError('Invalid token')
    })
  })
  describe('login', () => {
    let userStore
    beforeEach(() => {
      setActivePinia(createPinia())
      userStore = useUserStore()
    })
    it('user is anonymous by default', () => {
      expect(userStore.user).toBeNull()
    })
    it('logs user in and updates state', async () => {
      const identifier = mock.totoUsernameIdentifierData.id
      const password = mock.totoUserPasswordData.password
      // console.log('► app/composables/login - userStore.user (before):', userStore.user)
      await userStore.loginUser(identifier, password)
      const result = userStore.user
      // console.log('► app/composables/login - userStore.user (after):', userStore.user)
      expect(convertStringsToDates(result)).toEqual(mock.totoUser)
    })
    it('user value is equal to user after login', async () => {
      const identifier = mock.totoUsernameIdentifierData.id
      const password = mock.totoUserPasswordData.password
      await userStore.loginUser(identifier, password)
      expect(convertStringsToDates(userStore.user)).toEqual(mock.totoUser)
    })
  })
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
})
