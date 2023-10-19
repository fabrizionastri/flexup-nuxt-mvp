import { Item } from 'entities/item'
import {
  createOrderGateway,
  OrderGateway,
  sumAmountExclTax,
  addItemsToOrder,
  computeOrder
} from './orderGateway'

import * as orders from 'mock/inMemory/order'

// describe('orderGateway', () => {
//   let orderGateway: OrderGateway

describe.only('sumAmountExclTax', () => {
  it('should return sum for array of items', () => {
    const items = orders.commercialOrder.items
    const expected = 221
    const result = sumAmountExclTax(items)
    expect(result).toEqual(expected)
  })
  it('should return undefined for empty array', () => {
    const items = [] as Item[]
    const expected = undefined
    const result = sumAmountExclTax(items)
    expect(result).toEqual(expected)
  })
  it('should return undefined if any amount is undefined', () => {
    const items = [{ amountExclTax: 1 }, { amountExclTax: undefined }] as Item[]
    const expected = undefined
    const result = sumAmountExclTax(items)
    expect(result).toEqual(expected)
  })
  it('should return undefined if any amount is null', () => {
    const items = [{ amountExclTax: 1 }, { amountExclTax: null }] as Item[]
    const expected = undefined
    const result = sumAmountExclTax(items)
    expect(result).toEqual(expected)
  })
  it('should return undefined if any amount is missing', () => {
    const items = [{ amountExclTax: 1 }, { plop: 3 }] as Item[]
    const expected = undefined
    const result = sumAmountExclTax(items)
    expect(result).toEqual(expected)
  })
  it('should return undefined if sum is 0', () => {
    const items = [{ amountExclTax: 0 }, { amountExclTax: 0 }] as Item[]
    const expected = undefined
    const result = sumAmountExclTax(items)

    expect(result).toEqual(expected)
  })
})
//   describe('computeOrderWithItems', () => {
//     it('should compute order with items only', async () => {
//       const result = await computeOrderWithItems(orders.commercialOrderData)
//       expect(result).toEqual(orders.commercialOrderWithItemsOnly)
//     })
//   })
//   describe('computeOrder', () => {
//     it('should compute order with items and tranches', async () => {
//       const result = await computeOrder(orders.commercialOrderData, trancheAdapter)
//       expect(result).toEqual(orders.commercialOrder)
//     })
//   })
//   describe('pizzaDOroTakeAwayAccount - for existing account with single donation order', () => {
//     beforeEach(async () => {
//       orderGateway = createOrderGateway('pizzaDOroTakeAwayAccount')
//     })
//     it('getById should return the fully computed order', async () => {
//       const result = await orderGateway.getById('donationOrder')
//       expect(result).toEqual(orders.donationOrder)
//     })
//     it('getAll should return all fully computed order for this account', async () => {
//       const result = await orderGateway.getAll()
//       expect(result).toEqual([orders.donationOrder])
//     })
//   })
//
//   describe('for inexisting account', () => {
//     beforeEach(async () => {
//       orderGateway = createOrderGateway('account99')
//     })
//     it('getById should return undefined', async () => {
//       const result = await orderGateway.getById('commercialOrder')
//       expect(result).toBeUndefined()
//     })
//     it('getAll should return all []', async () => {
//       const result = await orderGateway.getAll()
//       expect(result).toEqual([])
//     })
//   })
//
//   describe('fabrizioAccount - for existing account with multiple orders', () => {
//     beforeEach(async () => {
//       orderGateway = createOrderGateway('fabrizioAccount')
//     })
//     it('getById(commercialOrder) should return the fully computed order', async () => {
//       const result = await orderGateway.getById('commercialOrder')
//       expect(result).toEqual(orders.commercialOrder)
//     })
//     it('getById(orderWithNoItems) should return the computed order with tranches but no items', async () => {
//       const result = await orderGateway.getById('orderWithNoItems')
//       expect(result).toEqual(orders.orderWithNoItems)
//     })
//     it('getById(orderWithNoTranches) should return the computed order with tranches but no items', async () => {
//       const result = await orderGateway.getById('orderWithNoTranches')
//       expect(result).toEqual(orders.orderWithNoTranches)
//     })
//     // it('getAll should return all fully computed order for this account', async () => {
//     //   const result = await orderGateway.getAll()
//     //   expect(result).toEqual([
//     //     orders.commercialOrder,
//     //     orders.donationOrder,
//     //     orders.orderWithNoItems
//     //   ])
//     // })
//   })
// })
