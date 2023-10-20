import { createOrderAdapter } from '.'
import * as orderMocks from 'mock/inMemory/order'

describe('createOrderAdapter', () => {
  let orderAdapter: any
  describe('for existing account', () => {
    beforeAll(() => {
      orderAdapter = createOrderAdapter('pizzaDOroAccount')
    })

    describe('getAll', () => {
      it('return all orders for this account', async () => {
        const result = await orderAdapter.getAll()
        expect(result).toEqual(orderMocks.pizzaDOroAccountOrderDatas)
      })
    })
    describe('getById', () => {
      it('should return an order for exiting order id', async () => {
        const result = await orderAdapter.getById('commercialOrder')
        expect(result).toEqual(orderMocks.commercialOrderData)
      })
      it('should return undefined for inexistant id', async () => {
        const result = await orderAdapter.getById('inexistant')
        expect(result).toEqual(undefined)
      })
      it('should return undefined for order id from unrelated account', async () => {
        const result = await orderAdapter.getById('orderWithRebate')
        expect(result).toEqual(undefined)
      })
    })
    describe('getByProperty', () => {
      it('should return all order matching property/value', async () => {
        const result = await orderAdapter.getByProperty('nature', 'commercial')
        expect(result).toEqual([orderMocks.commercialOrderData, orderMocks.orderWithNoItemsData])
      })
      it('should return empty array for inexistant property', async () => {
        const result = await orderAdapter.getByProperty('inexistant', 'plop')
        expect(result).toEqual([])
      })
      it('should return empty array for inexistant value', async () => {
        const result = await orderAdapter.getByProperty('clientAccountId', 'inexistant')
        expect(result).toEqual([])
      })
    })
  })
  describe('for a non existing account', () => {
    beforeAll(() => {
      orderAdapter = createOrderAdapter('account99')
    })
    describe('getById', () => {
      it('should return undefined for exsiting order id', async () => {
        const result = await orderAdapter.getById('commercialOrder')
        expect(result).toEqual(undefined)
      })
    })
    describe('getAll', () => {
      it('return empty array', async () => {
        const result = await orderAdapter.getAll()
        expect(result).toEqual([])
      })
    })
  })
})
