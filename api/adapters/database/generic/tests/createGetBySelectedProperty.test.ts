import { createGetBySelectedProperty } from '../methods'
import { agroCoopAccountData } from 'mock/inMemory'
import type { AccountData } from 'lib/entities'

describe('api/adapters/database/inMemory/methods/createGetBySelectedProperty', () => {
  it('should return list of entities when provide with a valid key/value pair', async () => {
    const getBySelectedProperty = createGetBySelectedProperty<AccountData>('account', 'countryId')
    const result = await getBySelectedProperty('CHE')
    expect(result.sort()).toEqual([agroCoopAccountData].sort())
  })
  it('should return [] with a valid key/value pair with no corresponding values', async () => {
    const getBySelectedProperty = createGetBySelectedProperty<AccountData>('account', 'countryId')
    const result = await getBySelectedProperty('USA')
    expect(result).toEqual([])
  })
  it('should throw error if invalid key', async () => {
    const getBySelectedProperty = createGetBySelectedProperty<AccountData>('account', 'invalidKey')
    await expect(() => getBySelectedProperty('CHE')).rejects.toThrowError()
  })
})
