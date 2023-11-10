import { sortById } from '../../lib/utils'
import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'
import * as mock from '../../mock/inMemory'
import { fetchAccounts } from './'

describe('app/composable/fetchAccounts', () => {
  describe('with default account status (["active"])', () => {
    it('should return the list all accounts for user when valid token is provided', async () => {
      const token = mock.totoUserToken
      const result = convertStringsToDates(await fetchAccounts(token))
      // console.log(result)
      const expected = mock.accountsForTotoUser
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return an error message user when invalid token is provided', async () => {
      const token = 'invalid'
      const result = await fetchAccounts(token)
      const expected = {
        error: 'Invalid token'
      }
      expect(result).toEqual(expected)
    })
  })
  describe('with specific account status', () => {
    it('should return the list all active accounts for user when valid token and "active" status is provided', async () => {
      const token = mock.fabrizioUserToken
      const result = convertStringsToDates(await fetchAccounts(token, ['active']))
      const expected = mock.activeAccountsForFabrizioUser
      expect(sortById(result)).toEqual(sortById(expected))
    })
    it('should return an error message user when invalid credentials are provided', async () => {
      const token = 'invalid'
      const result = await fetchAccounts(token)
      const expected = {
        error: 'Invalid token'
      }
      expect(result).toEqual(expected)
    })
  })
})
