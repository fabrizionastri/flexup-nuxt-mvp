import { config } from 'dotenv'
config() // load variables from .env into process.env
import { orders } from 'mock/inMemory'

import { getAllOrdersForAccountId } from './getAllOrdersForAccountId'

describe('getAllOrdersForAccountId', () => {
  // console.log('orderDatas', orders)
  // it('should return true', () => {
  //   console.log('Core : getAllOrdersForAccountId → process.env.NODE_ENV', process.env.NODE_ENV)
  //   console.log(
  //     'Core : getAllOrdersForAccountId → process.env.STORAGE_TYPE',
  //     process.env.STORAGE_TYPE
  //   )
  //   expect(true).toEqual(true)
  // })
  it('should return all orders for an existing account ID', async () => {
    const result = await getAllOrdersForAccountId('account0')
    expect(result).toEqual(orders.slice(0, 2))
  })

  it('should return empty array for inexistant id', async () => {
    const result = await getAllOrdersForAccountId('account99')
    expect(result).toEqual([])
  })
})
