import { createGetById } from '../methods'
import { fabrizioAccountData } from 'mock/inMemory'
import type { AccountData } from 'lib/entities'

describe('api/adapters/database/inMemory/methods/getById', () => {
  it('should return the correct entity by id', async () => {
    const getById = createGetById<AccountData>('account')
    const result = await getById('fabrizioAccount')
    expect(result).toEqual(fabrizioAccountData)
  })
  it('should return the correct entity by id', async () => {
    const getById = createGetById<AccountData>('account')
    const result = await getById('invalid')
    expect(result).toBeUndefined()
  })
})
