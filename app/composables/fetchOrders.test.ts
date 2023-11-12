import { fetchOrders } from './fetchOrders'

describe.todo('fetchOrders', () => {
  it('should return an array of orders for existing account ID', async () => {
    const accountId = 'flexupAccount'
    const orders = await fetchOrders(accountId)
    console.log('fetchOrders.test.ts → orders from test:', orders)
    expect(orders).toEqual([])
    // expect(true).toBe(true)
  })

  // it('should return an empty array for non-existing account ID', async () => {
  //   const accountId = 'flexup'
  //   const orders = await fetchOrders(accountId)
  //   expect(orders).toEqual([])
  //   // expect(true).toBe(true)
  // })
})
