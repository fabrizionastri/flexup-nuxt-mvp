import type { AccountData } from 'lib/entities'

import { agroCoopAccountData } from 'mock/inMemory'
import { createGetByProperty } from '../methods'

describe('api/adapters/database/inMemory/methods/createGetByProperty', () => {
  it('should return list of entities when provide with a valid key/value pair', async () => {
    const getByProperty = createGetByProperty<AccountData>('account')
    const result = await getByProperty('countryId', 'CHE')
    // console.log('adapters/getByProperty - result:', result)
    expect(result.sort()).toEqual([agroCoopAccountData].sort())
  })
  it('should return [] with a valid key/value pair with no corresponding values', async () => {
    const getByProperty = createGetByProperty<AccountData>('account')
    const result = await getByProperty('countryId', 'USA')
    expect(result).toEqual([])
  })
  it('should throw error if invalid key', async () => {
    const getByProperty = createGetByProperty<AccountData>('account')
    // const result = getByProperty('invalideKey', 'CHE', 'type', 'personal')
    // console.log('adapters/getByProperty - result:', result)
    await expect(getByProperty('invalidKey', 'CHE')).rejects.toThrowError()
  })
})
