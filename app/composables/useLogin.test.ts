import { convertStringsToDates } from '../../lib/utils'
import * as mock from '../../mock/inMemory'
import { anonymousUser, useUserStore } from '../store/useUserStore'
import { createPinia, setActivePinia } from 'pinia'

describe('app/composables/login.test', () => {
  let userStore
  beforeEach(() => {
    setActivePinia(createPinia())
    userStore = useUserStore()
  })
  it('user is anonymous by default', () => {
    expect(userStore.user).toEqual(anonymousUser)
  })
  it('logs user in and updates state', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = mock.totoUserPasswordData.password
    expect(userStore.user).toEqual(anonymousUser)
    // console.log('► app/composables/login - userStore.user (before):', userStore.user)
    const result = await userStore.loginUser(identifier, password)
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
