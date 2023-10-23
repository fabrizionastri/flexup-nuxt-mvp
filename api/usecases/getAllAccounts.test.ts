import * as accountUsers from 'mock/inMemory/accountUser'
import { getAllAccountIds } from './getAllAccounts'

describe('getAllAccounts', () => {
  it('fabrizioUser - should return the list of accounts for a given user id', () => {
    const userId = 'fabrizioUser'
    const result = getAllAccountIds(userId)
    const expected = accountUsers.accountIdsForFabrizioUser
    expect(result).toEqual(expected)
  })

  it.todo('totoUser - should return the list of accounts for a given user id', () => {
    const userId = 'totoUser'
    const result = getAllAccountIds(userId)
    const expected = accountUsers.accountIdsForTotoUser
    expect(result).toEqual(expected)
  })
})
