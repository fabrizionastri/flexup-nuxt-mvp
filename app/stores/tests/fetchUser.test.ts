import { createPinia, setActivePinia } from 'pinia'
import { convertStringsToDates } from '../../../lib/utils/convertStringsToDates'
import * as mock from '../../../mock/inMemory'
import { useUserStore } from '../useUserStore'

describe('app/composable/fetchUser', () => {
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
