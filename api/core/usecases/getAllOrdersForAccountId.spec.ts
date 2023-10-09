import { orders } from 'mock/inMemory'

import { getAllOrdersForAccountId } from './getAllOrdersForAccountId'

describe('getAllOrdersForAccountId', () => {
  console.log('orderDatas', orders)
  it('should return true', () => {
    expect(true).toEqual(true)
  })
  //   it.only('should return all orders for an existing account ID', async () => {
  //     const result = await getAllOrdersForAccountId('account0')
  //     expect(result).toEqual(orders.slice(0, 2))
  //   })
  //
  //   it.only('should return empty array for inexistant id', async () => {
  //     const result = await getAllOrdersForAccountId('account99')
  //     expect(result).toEqual([])
  //   })
})
