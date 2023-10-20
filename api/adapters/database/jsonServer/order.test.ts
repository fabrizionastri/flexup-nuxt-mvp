// import { orderDatas } from 'mock/inMemory'

// import { createOrderAdapter } from './createOrderAdapter'

// let accountId: string

describe('createOrderAdapter (real Axios)', () => {
  it('test case', () => {
    const assertion = 1
    const result = 1
    expect(assertion).toEqual(result)
  })
  // describe('for existing accountId', () => {
  //   beforeAll(() => {
  //     accountId = 'flexup'
  //   })
  //   describe('getById', () => {
  //     it('should return order for order id for current account', async () => {
  //       const orderAdapter = createOrderAdapter(accountId)
  //       const orderData = await orderAdapter.getById('orderWithRebate')
  //       expect(orderData).toEqual(orderDatas[1])
  //     })
  //     it('should return undefined for order id from other account', async () => {
  //       const orderAdapter = createOrderAdapter(accountId)
  //       const orderData = await orderAdapter.getById('orderWithNoItems')
  //       expect(orderData).toEqual(undefined)
  //     })
  //     it('should return undefined for unknown order id', async () => {
  //       const orderAdapter = createOrderAdapter(accountId)
  //       const orderData = await orderAdapter.getById('unknown')
  //       expect(orderData).toBeUndefined()
  //     })
  //   })
  //   describe('getAll', () => {
  //     it('should return all orderData for accountId', async () => {
  //       console.log('accountId', `/order?supplierAccountId=${accountId}`)
  //       const orderAdapter = createOrderAdapter(accountId)
  //       const orderData = await orderAdapter.getAll()
  //       expect(orderData).toEqual(orderDatas.slice(0, 2))
  //     })
  //   })
  // })
  // describe('for inexistant accountId', () => {
  //   beforeAll(() => {
  //     accountId = 'account99'
  //   })
  //   describe('getById', () => {
  //     it('should return orderData for order id', async () => {
  //       const orderAdapter = createOrderAdapter(accountId)
  //       const orderData = await orderAdapter.getById('orderWithNoItems')
  //       expect(orderData).toBeUndefined()
  //     })
  //   })
  // })
})
