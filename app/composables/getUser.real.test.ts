import * as mock from 'mock/inMemory'
import { getUser } from './getUser'
import Cookies from 'js-cookie'
// import type { Mock } from 'vitest'
// const CookiesGetMock = Cookies.get as Mock
vi.mock('js-cookie')

describe('app/composable/getUser', () => {
  it('should return a computed user when valid userId is provided', async () => {
    Cookies.get.mockReturnValue(mock.totoUserToken)
    const result = await getUser()
    const expected = mock.totoUser
    expect(result).toEqual(expected)
  })
  it('should return an error message user when an invalid token is provided', async () => {
    Cookies.get.mockReturnValue('invalid')
    const result = await getUser()
    const expected = { error: 'Invalid token' }
    expect(result).toEqual(expected)
  })
})
