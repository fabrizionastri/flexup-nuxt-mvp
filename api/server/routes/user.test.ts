import { convertStringsToDates } from 'lib/utils'
import * as mock from 'mock/inMemory'
import app from './user'

describe('api/server/routes/user', () => {
  describe('POST /login', () => {
    beforeEach(() => {
      // clean up any error side effects
    })
    it('should return user and status 200 for valid login', async () => {
      const body = {
        method: 'POST',
        body: JSON.stringify({
          identifier: 'totoUsername',
          password: 'plop'
        })
      }
      const res = await app.request('/login', body)
      expect(res.status).toBe(200)
      // expect(await res.json()).toEqual(convertDatesToStrings(totoUser))
    })
    // TODO: fix this test, should be 401 and 'Invalid identifier'
    it('should an error message and 401 status for invalid identifier', async () => {
      const body = {
        method: 'POST',
        body: JSON.stringify({
          identifier: 'invalidUsername',
          password: 'plop'
        })
      }
      const res = await app.request('/login', body)

      // console.log('1. ► api/server/routes/ : res (this is printed out):', res)
      expect(res.status).toBe(401)
      // if response is OK, then we expect a json response, otherwise a text response
      // in both cases, we need to parse the response
      const data = res.status === 401 ? await res.text() : await res.json()

      if (typeof data === 'string') {
        expect(data).toBe('Invalid identifier')
      } else {
        expect(data).toEqual({ error: 'Invalid identifier' })
      }
      // console.log('2. ► api/server/routes/ : json (this is printed out):', data)
    })
    it('should an error message and 401 status for invalid password', async () => {
      const body = {
        method: 'POST',
        body: JSON.stringify({
          identifier: 'totoUsername',
          password: 'invalidPassword'
        })
      }
      const res = await app.request('/login', body)
      expect(res.status).toBe(401)
      expect(await res.text()).toBe('Invalid password')
    })
  })
  describe('POST /', () => {
    it('should return user and status 200 for valid jwt', async () => {
      const jwt = mock.totoUserToken
      const res = await app.request('/', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      const result = convertStringsToDates(await res.json())
      const expected = convertStringsToDates(mock.totoUser)
      expect(res.status).toBe(200)

      expect(result).toEqual(expected)
    })
    it('should return an error and status 404 for invalid jwt', async () => {
      const jwt = 'invalid'
      const res = await app.request('/', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      const result = convertStringsToDates(await res.json())
      const expected = { error: 'Invalid token' }
      expect(res.status).toBe(401)

      expect(result).toEqual(expected)
    })
  })
})
