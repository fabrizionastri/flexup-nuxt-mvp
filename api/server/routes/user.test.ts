import { totoUser } from 'mock/inMemory/user'
import app from './user'
import { convertDatesToStrings } from 'lib/utils/convertDatesToStrings'

describe('hono user routes', () => {
  describe('POST /login', () => {
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
      expect(await res.json()).toEqual(convertDatesToStrings(totoUser))
    })
    it('should an error message and 402 status for invalid identifier', async () => {
      const body = {
        method: 'POST',
        body: JSON.stringify({
          identifier: 'invalidUsername',
          password: 'plop'
        })
      }
      const res = await app.request('/login', body)
      expect(res.status).toBe(402)
      expect(await res.json()).toEqual({ error: 'Invalid identifier' })
    })
    it('should an error message and 402 status for invalid password', async () => {
      const body = {
        method: 'POST',
        body: JSON.stringify({
          identifier: 'totoUsername',
          password: 'invalidPassword'
        })
      }
      const res = await app.request('/login', body)
      expect(res.status).toBe(402)
      expect(await res.json()).toEqual({ error: 'Invalid password' })
    })
  })
})
