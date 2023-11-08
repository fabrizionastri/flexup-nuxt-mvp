import * as mock from 'mock/inMemory'
import jwt from 'jsonwebtoken'
import { getUser } from './getUser'

describe('app/composable/getUser', () => {
  it('should return a computed user when valid userId is provided', async () => {
    const userId = mock.totoUserData.id
    const token = mock.totoUserTokenUndated
    const decoded = jwt.verify(token, 'default_private_key') as jwt.JwtPayload
    // console.log('app/composables/login.test.ts - decoded:', decoded)
    const result = await getUser()
    const expected = mock.totoUser
    expect(result).toEqual(expected)
  })
  it('should return an error message user when userId is provided', async () => {
    const userId = 'invalid'
    const result = await getUser()
    // console.log('app/composables/login.test.ts - result:', result)
    const expected = {
      error: 'Invalid userId'
    }
    expect(result).toEqual(expected)
  })
})
