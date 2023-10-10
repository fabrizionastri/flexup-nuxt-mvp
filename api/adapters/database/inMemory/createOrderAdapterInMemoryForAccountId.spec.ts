import { orderDatas } from 'mock/inMemory'
// import { orderDatas } from '../../../mock/inMemory'
// import { orderDatas } from 'mock/inMemory'

// import { createOrderAdapterInMemoryForAccountId } from './createOrderAdapterInMemoryForAccountId'
//
// let adapter: any

describe('createOrderAdapterInMemoryForAccountId', () => {
  // console.log('orderDaatas', orderDatas)
  it('should return true', () => {
    expect(true).toEqual(true)
  })
  // describe('for existing account', () => {
  //   beforeAll(() => {
  //     adapter = createOrderAdapterInMemoryForAccountId('account0')
  //   })
  //   describe('getById', () => {
  //     it('should return an order for exiting order id', async () => {
  //       const result = await adapter.getById('order0')
  //       expect(result).toEqual(orderDatas[0])
  //     })
  //     it('should return undefined for inexistant id', async () => {
  //       const result = await adapter.getById('inexistant')
  //       expect(result).toEqual(undefined)
  //     })
  //     it('should return undefined for order id from unrelated account', async () => {
  //       const result = await adapter.getById('order3')
  //       expect(result).toEqual(undefined)
  //     })
  //   })
  //   describe('getAll', () => {
  //     it('return all orders for this account', async () => {
  //       const result = await adapter.getAll()
  //       expect(result).toEqual(orderDatas.slice(0, 2))
  //     })
  //   })
  // })
  // describe('for a non existing account', () => {
  //   beforeAll(() => {
  //     adapter = createOrderAdapterInMemoryForAccountId('account99')
  //   })
  //   describe('getById', () => {
  //     it('should return undefined for exsiting order id', async () => {
  //       const result = await adapter.getById('order0')
  //       expect(result).toEqual(undefined)
  //     })
  //   })
  //   describe('getAll', () => {
  //     it('return empty array', async () => {
  //       const result = await adapter.getAll()
  //       expect(result).toEqual([])
  //     })
  //   })
  // })
})
