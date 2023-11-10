import { sortById } from './../../lib/utils/sortById'
import { pizzaDOroAccountOrders } from 'mock/inMemory/order'
import { getAllOrders } from './getAllOrders'

describe('getAllOrders', () => {
  it('should return all orders for an existing account ID', async () => {
    const result = await getAllOrders('pizzaDOroAccount')
    expect(sortById(result)).toEqual(sortById(pizzaDOroAccountOrders))
  })

  it('should return empty array for inexistant id', async () => {
    const result = await getAllOrders('account99')
    expect(result).toEqual([])
  })
})
