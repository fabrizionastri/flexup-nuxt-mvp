import { sortById, convertStringsToDates } from 'lib/utils'
import * as mock from 'mock/inMemory'
import app from './account'

describe('api/server/routes/account', () => {
  describe('GET /', () => {
    it('should return the list all user accounts and status 200 for valid jwt - toto', async () => {
      const jwt = mock.totoUserToken
      const res = await app.request('/', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      expect(res.status).toBe(200)

      const result = sortById(convertStringsToDates(await res.json()))
      const expected = sortById(mock.accountsForTotoUser)
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return the list all user accounts and status 200 for valid jwt - fabrizio', async () => {
      const jwt = mock.fabrizioUserToken
      const res = await app.request('/', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      const result = sortById(convertStringsToDates(await res.json()))
      const expected = sortById(mock.accountsForFabrizioUser)
      expect(res.status).toBe(200)
      expect(result).toEqual(expected)
    })
    it('should return the list pending accounts and status 200 for valid jwt - fabrizio', async () => {
      const jwt = mock.fabrizioUserToken
      const res = await app.request('?status=active', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      const result = sortById(convertStringsToDates(await res.json()))
      const expected = sortById(mock.activeAccountsForFabrizioUser)
      expect(res.status).toBe(200)
      expect(result).toEqual(expected)
    })
    it('should return the list pending accounts and status 200 for valid jwt - fabrizio', async () => {
      const jwt = mock.fabrizioUserToken
      const res = await app.request('?status=active,pending', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      const result = sortById(convertStringsToDates(await res.json()))
      const expected = sortById(mock.accountsForFabrizioUser)
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
