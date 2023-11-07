import { createGetByValues } from '../methods'
import { agroCoopAccountData, cosysAccountData, doMazyAccountData } from 'mock/inMemory'
import type { AccountData } from 'lib/entities'

describe('jsonServer/methods/createGetByValues', () => {
  it('should return list of entities when provided with a valid key and list of values', async () => {
    const getByValues = createGetByValues<AccountData>('account')
    const result = await getByValues('type', ['shared', 'business'])
    // console.log('adapters/getByValues - result:', result)
    expect(result.sort()).toEqual([cosysAccountData, doMazyAccountData, agroCoopAccountData].sort())
  })
  it('should return [] with a valid key/value pair with no corresponding values', async () => {
    const getByValues = createGetByValues<AccountData>('account')
    const result = await getByValues('type', ['plop'])
    expect(result).toEqual([])
  })
})
