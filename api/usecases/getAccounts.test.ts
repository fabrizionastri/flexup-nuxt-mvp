import { pizzaDOroTakeAwayAccountFabrizioUser } from './../../mock/inMemory/accountMember'
import { sortById } from 'lib/utils'
import { accountsForFabrizioUser } from 'mock/inMemory/accountMember'
import { getAccounts } from './getAccounts'

describe('api/usecases/getAccounts', () => {
  it('fabrizioUser - should return the list of accounts for a given user id', async () => {
    const result = await getAccounts('fabrizioUser')
    const expected = accountsForFabrizioUser
    expect(sortById(result)).toEqual(sortById(expected))
  })
  it('fabrizioUser - should return the list of accounts for a given user id and pending status', async () => {
    const result = await getAccounts('fabrizioUser', ['pending'])
    const expected = [pizzaDOroTakeAwayAccountFabrizioUser]
    expect(sortById(result)).toEqual(sortById(expected))
  })
})
