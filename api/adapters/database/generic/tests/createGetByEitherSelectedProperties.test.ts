import { sortById } from 'lib/utils'
import { createGetByEitherSelectedProperties } from '../methods'
import * as mock from 'mock/inMemory'
import type { Order } from 'lib/entities'

describe('api/adapters/database/generic/tests/getByAccountId.ts', () => {
  it('should return list of all orders for accountId', async () => {
    const getByAccountId = createGetByEitherSelectedProperties<Order>(
      'order',
      'clientAccountId',
      'supplierAccountId'
    )
    const result = await getByAccountId('pizzaDOroAccount')
    expect(sortById(result)).toEqual(sortById(mock.pizzaDOroAccountOrderDatas))
  })
  it('should throw error if invalid property is given', async () => {
    const getByAccountId = createGetByEitherSelectedProperties<Order>(
      'order',
      'invalid',
      'supplierAccountId'
    )
    try {
      getByAccountId('plop')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('Property "invalid" does not exist on "order"')
    }
  })
  it('should throw error if invalid property is given', async () => {
    const getByAccountId = createGetByEitherSelectedProperties<Order>(
      'order',
      'invalid',
      'supplierAccountId'
    )
    try {
      getByAccountId('plop')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('Property "invalid" does not exist on "order"')
    }
  })
})

//   it('should return list of entities when provide with 2 valid key/value pairs, and with "and"', async () => {
//
//     const result = await getByAccountId('CHE', 'business')
//     // console.log('adapters/getByAccountId - result:', result)
//     expect(result.sort()).toEqual([agroCoopAccountData].sort())
//   })
//   it('should return list of entities when provide with 2 valid key/value pairs, and with "or"', async () => {
//
//     const result = await getByAccountId('CHE', 'personal')
//
//     expect(new Set(result)).toEqual(
//       new Set([fabrizioAccountData, totoAccountData, agroCoopAccountData])
//     )
//   })
//   it('should return [] with 2 valid key/value pairs with no corresponding values', async () => {
//     const getByAccountId = getByAccountId<AccountData>(
//       'account',
//       'countryId',
//       'type'
//     )
//     const result = await getByAccountId('CHE', 'personal')
//
//     expect(result).toEqual([])
//   })
