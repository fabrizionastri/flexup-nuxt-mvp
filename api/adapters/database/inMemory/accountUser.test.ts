import { isUserMemberOfAccount } from './accountUser'

describe('accountUser adapter - isUserMemberOfAccount', () => {
  it('should be true', () => {
    const result = 1
    const expected = 1
    expect(result).toEqual(expected)
  })
  it('should return true for valid userId/accountId pair', async () => {
    const result = await isUserMemberOfAccount('totoUser', 'totoAccount')
    expect(result).toEqual(true)
  })
  it('should return false for mismatched userId/accountId pair', async () => {
    const result = await isUserMemberOfAccount('totoUser', 'fabrizioAccount')
    expect(result).toEqual(false)
  })
  it('should return false for inexistant userId', async () => {
    const result = await isUserMemberOfAccount('plop', 'fabrizioAccount')
    expect(result).toEqual(false)
  })
})
