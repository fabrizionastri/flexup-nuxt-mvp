import { sortById } from './../../lib/utils/sortById'
import { pizzaDOroAccountOrders } from 'mock/inMemory/order'
import { getOrders } from './getOrders'

describe('getOrders', () => {
  it('should return all orders for an existing account ID', async () => {
    const result = await getOrders('pizzaDOroAccount')
    expect(sortById(result)).toEqual(sortById(pizzaDOroAccountOrders))
  })

  it('should return empty array for inexistant id', async () => {
    const result = await getOrders('account99')
    expect(result).toEqual([])
  })
})
