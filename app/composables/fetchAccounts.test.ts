import { sortById } from '../../lib/utils/sortById'
import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'
import * as mock from '../../mock/inMemory'
import { fetchAccounts } from './'

describe('app/composable/fetchAccounts', () => {
  it('should return a token when valid credentials are provided', async () => {
    const token = mock.totoUserToken
    const result = convertStringsToDates(await fetchAccounts(token))
    const expected = mock.accountsForTotoUser
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
