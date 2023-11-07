import { accountsForFabrizioUser } from 'mock/inMemory/accountUser'
import { getAllAccounts } from './getAllAccounts'

describe('getAllAccounts', () => {
  it('fabrizioUser - should return the list of accounts for a given user id', async () => {
    const result = await getAllAccounts('fabrizioUser')
    const expected = accountsForFabrizioUser
    expect(new Set(result)).toEqual(new Set(expected))
  })
})
