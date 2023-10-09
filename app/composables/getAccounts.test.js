import { getAccounts, accountList } from './getAccounts.js'

describe('getAccounts', () => {
  it('should return full accounts list when no arguments are provided', () => {
    const assertion = getAccounts()
    const result = accountList
    expect(assertion).toEqual(result)
  })

  it('should return an account when the id is provided', () => {
    const assertion = getAccounts('id', 1)
    const result = accountList.slice(0, 1)
    expect(assertion).toEqual(result)
  })

  it('should return an account when the name is provided', () => {
    const assertion = getAccounts('name', 'FlexUp')
    const result = accountList.slice(0, 1)
    expect(assertion).toEqual(result)
  })
})
