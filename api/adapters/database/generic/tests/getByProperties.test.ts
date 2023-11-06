import type { AccountData } from 'lib/entities'
import { createGetByProperties } from '../methods'
import {
  totoAccountData,
  fabrizioAccountData,
  agroCoopAccountData,
  cosysAccountData
} from 'mock/inMemory'

describe('api/adapters/database/inMemory/methods/createGetByProperties', () => {
  it('should return list of entities when provide with 2 valid key/value pairs, and no "and/or"', async () => {
    const getByProperties = createGetByProperties<AccountData>('account')
    const result = await getByProperties('countryId', 'FRA', 'type', 'business')
    expect(new Set(result)).toEqual(new Set([cosysAccountData]))
  })
  it('should return list of entities when provide with 2 valid key/value pairs, and with "and"', async () => {
    const getByProperties = createGetByProperties<AccountData>('account')
    const result = await getByProperties('countryId', 'CHE', 'type', 'business', 'and')
    // console.log('adapters/getByProperties - result:', result)
    expect(new Set(result)).toEqual(new Set([agroCoopAccountData]))
  })
  it('should return list of entities when provide with 2 valid key/value pairs, and with "or"', async () => {
    const getByProperties = createGetByProperties<AccountData>('account')
    const result = await getByProperties('countryId', 'CHE', 'type', 'personal', 'or')
    // console.log('adapters/getByProperties - result:', result)
    expect(new Set(result)).toEqual(
      new Set([fabrizioAccountData, totoAccountData, agroCoopAccountData])
    )
  })
  it('should return [] with 2 valid key/value pairs with no corresponding values', async () => {
    const getByProperties = createGetByProperties<AccountData>('account')
    const result = await getByProperties('countryId', 'CHE', 'type', 'personal')
    // console.log('adapters/getByProperties - result:', result)
    expect(result).toEqual([])
  })
  // TODO: fix this test. It should throw an error, and it does. But the test fails. Why?
  // it('should throw error if invalid key', async () => {
  //   const getByProperties = createGetByProperties<AccountData>('account')
  //   await expect(getByProperties('invalidKey', 'CHE', 'type', 'personal')).rejects.toThrowError()
  // })
})
