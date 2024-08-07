import { isUserMemberOfAccount } from './accountMember'

describe('accountMember in json-server adapter . real - isUserMemberOfAccount', () => {
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
