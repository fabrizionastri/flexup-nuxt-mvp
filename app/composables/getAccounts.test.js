import { getAccounts } from './getAccounts.js'

import { accountDatas } from 'mock/inMemory'

describe('getAccounts', () => {
  console.log('accountDatas:', accountDatas)
  it('should return full accounts list when no arguments are provided', async () => {
    const assertion = await getAccounts()
    const result = accountDatas
    expect(assertion).toEqual(result)
  })

  it('should return an account when the id is provided', async () => {
    const assertion = await getAccounts('id', 1)
    const result = accountDatas.slice(0, 1)
    expect(assertion).toEqual(result)
  })

  it('should return an account when the name is provided', async () => {
    const assertion = await getAccounts('name', 'FlexUp')
    console.log('assertion:', assertion)
    const result = accountDatas.slice(0, 1)
    expect(assertion).toEqual(result)
  })
  // it('should be true', () => {
  //   expect(true).toBe(true)
  // })
})
