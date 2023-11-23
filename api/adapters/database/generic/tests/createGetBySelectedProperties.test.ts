import { createGetBySelectedProperties } from '../methods'
import {
  totoAccountData,
  fabrizioAccountData,
  agroCoopAccountData,
  cosysAccountData
} from 'mock/inMemory'
import type { AccountData } from 'lib/entities'

describe('api/adapters/database/inMemory/methods/createGetBySelectedProperties', () => {
  it('should return list of entities when provide with 2 valid key/value pairs, and no "and/or"', async () => {
    const getByProperties = createGetBySelectedProperties<AccountData>(
      'account',
      'countryId',
      'type'
    )
    const result = await getByProperties('FRA', 'business')
    expect(result.sort()).toEqual([cosysAccountData].sort())
  })
  it('should return list of entities when provide with 2 valid key/value pairs, and with "and"', async () => {
    const getByProperties = createGetBySelectedProperties<AccountData>(
      'account',
      'countryId',
      'type',
      'and'
    )
    const result = await getByProperties('CHE', 'business')
    // console.log('adapters/getByProperties - result:', result)
    expect(result.sort()).toEqual([agroCoopAccountData].sort())
  })
  it('should return list of entities when provide with 2 valid key/value pairs, and with "or"', async () => {
    const getByProperties = createGetBySelectedProperties<AccountData>(
      'account',
      'countryId',
      'type',
      'or'
    )
    const result = await getByProperties('CHE', 'personal')

    expect(new Set(result)).toEqual(
      new Set([fabrizioAccountData, totoAccountData, agroCoopAccountData])
    )
  })
  it('should return [] with 2 valid key/value pairs with no corresponding values', async () => {
    const getByProperties = createGetBySelectedProperties<AccountData>(
      'account',
      'countryId',
      'type'
    )
    const result = await getByProperties('CHE', 'personal')

    expect(result).toEqual([])
  })
  it('should throw error if invalid key', async () => {
    const getByProperties = createGetBySelectedProperties<AccountData>(
      'account',
      'invalidKey',
      'type'
    )
    await expect(getByProperties('CHE', 'personal')).rejects.toThrowError()
  })
})
