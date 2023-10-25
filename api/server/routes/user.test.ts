import { totoUser } from 'mock/inMemory/user'
import app from './user'
import { convertDatesToStrings } from 'lib/utils/convertDatesToStrings'

describe('hono user routes', () => {
  describe('POST /login', () => {
    it('should return user for valid loging', async () => {
      const res = await app.request('/login', {
        method: 'POST',
        body: JSON.stringify({
          identifier: 'totoUsername',
          password: 'plop'
        })
      })
      const user = await res.json()
      // console.log('user.test.ts - user:', user)
      expect(res.status).toBe(200)
      expect(user).toEqual(convertDatesToStrings(totoUser))
    })
  })
})
