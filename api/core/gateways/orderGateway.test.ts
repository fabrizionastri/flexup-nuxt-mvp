import { createOrderGateway } from './orderGateway'
import { OrderGateway } from 'gateways/orderGateway'
import {
  orders
  // orderDatas
} from 'mock/inMemory'

let orderGateway: OrderGateway

describe('orderGateway', () => {
  describe('for existing account', () => {
    beforeEach(async () => {
      orderGateway = createOrderGateway('flexup')
    })
    // /* These "Data" methods have been removed */
    // it('getByIdData should return the order with raw data only', async () => {
    //   const result = await orderGateway.getByIdData('commercialOrder')
    //   expect(result).toEqual(orderDatas[0])
    // })
    // it('getAllData should return all orders of corresponding account ID with raw data only', async () => {
    //   const result = await orderGateway.getAllData()
    //   expect(result).toEqual(orderDatas.slice(0, 2))
    // })
    it('getById should return the order with items, tranches and calculations', async () => {
      const result = await orderGateway.getById('commercialOrder')
      expect(result).toEqual(orders[0])
    })
    it('getAll should return all orders for this account', async () => {
      const result = await orderGateway.getAll()
      expect(result).toEqual(orders.slice(0, 2))
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
