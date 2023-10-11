// import { orderDatas } from 'db/inMemory'

// import { createOrderAdapterJsonServer } from './createOrderAdapterJsonServer'

// let accountId: string

describe('createOrderAdapterJsonServer (real Axios)', () => {
  it('empty test', () => {})
  // describe('for existing accountId', () => {
  //   beforeAll(() => {
  //     accountId = 'account0'
  //   })
  //   describe('getById', () => {
  //     it('should return order for order id for current account', async () => {
  //       const orderAdapter = createOrderAdapterJsonServer(accountId)
  //       const orderData = await orderAdapter.getById('order1')
  //       expect(orderData).toEqual(orderDatas[1])
  //     })
  //     it('should return undefined for order id from other account', async () => {
  //       const orderAdapter = createOrderAdapterJsonServer(accountId)
  //       const orderData = await orderAdapter.getById('order2')
  //       expect(orderData).toEqual(undefined)
  //     })
  //     it('should return undefined for unknown order id', async () => {
  //       const orderAdapter = createOrderAdapterJsonServer(accountId)
  //       const orderData = await orderAdapter.getById('unknown')
  //       expect(orderData).toBeUndefined()
  //     })
  //   })
  //   describe('getAll', () => {
  //     it('should return all orderData for accountId', async () => {
  //       console.log('accountId', `/order?supplierId=${accountId}`)
  //       const orderAdapter = createOrderAdapterJsonServer(accountId)
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
  //       const orderAdapter = createOrderAdapterJsonServer(accountId)
  //       const orderData = await orderAdapter.getById('order2')
  //       expect(orderData).toBeUndefined()
  //     })
  //   })
  // })
})
