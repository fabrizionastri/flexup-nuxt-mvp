import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import * as mock from '../../mock/inMemory'
import { fetchUser } from './'

describe('app/composable/fetchUser', () => {
  it('should return a user when valid token is provided', async () => {
    const token = mock.totoUserToken
    const result = convertStringsToDates(await fetchUser(token))
    const expected = mock.totoUser
    expect(result).toEqual(expected)
  })
  it('should return an error when invalid token is provided', async () => {
    const token = 'invalid'
    const result = await fetchUser(token)
    const expected = {
      error: 'Invalid token'
    }
    expect(result).toEqual(expected)
  })
})
