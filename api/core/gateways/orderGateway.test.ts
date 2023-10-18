import {
  // createItemAdapter,
  createTrancheAdapter
} from 'adapters/database'
import {
  createOrderGateway,
  computeOrderWithItems,
  computeOrder,
  OrderGateway
} from './orderGateway'

import * as orders from 'mock/inMemory/order'

let orderGateway: OrderGateway

// const itemAdapter = createItemAdapter()
const trancheAdapter = createTrancheAdapter()

describe('orderGateway', () => {
  describe('computeOrderWithItems', () => {
    it('should compute order with items only', async () => {
      const result = await computeOrderWithItems(orders.commercialOrderData)
      expect(result).toEqual(orders.commercialOrderWithItemsOnly)
    })
  })
  describe('computeOrder', () => {
    it('should compute order with items and tranches', async () => {
      const result = await computeOrder(orders.commercialOrderData, trancheAdapter)
      expect(result).toEqual(orders.commercialOrder)
    })
  })
  describe('for existing account', () => {
    beforeEach(async () => {
      orderGateway = createOrderGateway('pizzaDOroAccount')
    })
    it('getAll should return all orders for this account', async () => {
      // const itemAdapter = createItemAdapterInMemory()
      // console.log('itemAdapter in the orderGateway test', itemAdapter)
      const result = await orderGateway.getAll()
      expect(result).toEqual(orders.pizzaDOroAccountOrders)
    })
    it('getById should return the order with items, tranches and calculations', async () => {
      const result = await orderGateway.getById('commercialOrder')
      expect(result).toEqual(orders.commercialOrder)
    })
  })

  describe('for inexisting account', () => {
    beforeEach(async () => {
      orderGateway = createOrderGateway('account99')
    })
    // /* These "Data" methods have been removed */
    // it('getByIdData should return undefined', async () => {
    //   const result = await orderGateway.getByIdData('commercialOrder')
    //   expect(result).toBeUndefined()
    // })
    // it('getAllData should return []', async () => {
    //   const result = await orderGateway.getAllData()
    //   expect(result).toEqual([])
    // })
    it('getById should return undefined', async () => {
      const result = await orderGateway.getById('commercialOrder')
      expect(result).toBeUndefined()
    })
    it('getAll should return all []', async () => {
      const result = await orderGateway.getAll()
      expect(result).toEqual([])
    })
  })
})
