import { getAccounts } from './getAccounts.js'

import { accounts } from '../../mock/inMemory'

describe('getAccounts', () => {
  // console.log('accountDatas:', accountDatas2)
  it('should return full accounts list when no arguments are provided', async () => {
    const assertion = await getAccounts()
    const result = accounts
    expect(assertion).toEqual(result)
  })

  it('should return an account when the id is provided', async () => {
    const assertion = await getAccounts('id', 'account1')
    const result = accounts.slice(0, 1)
    expect(assertion).toEqual(result)
  })

  it('should return an account when the name is provided', async () => {
    const assertion = await getAccounts('name', 'FlexUp')
    // console.log('assertion:', assertion)
    const result = accounts.slice(0, 1)
    expect(assertion).toEqual(result)
  })
  // it('should be true', () => {
  //   expect(true).toBe(true)
  // })
})
