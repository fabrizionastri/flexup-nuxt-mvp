import { createOrderAdapterInMemory } from './orderAdapterInMemory'
import * as orderMocks from 'mock/inMemory/order'

let adapter: any

describe('createOrderAdapterInMemory', () => {
  describe('for existing account', () => {
    beforeAll(() => {
      adapter = createOrderAdapterInMemory('pizzaDOroAccount')
    })

    describe('getAll', () => {
      it('return all orders for this account', async () => {
        const result = await adapter.getAll()
        expect(result).toEqual(orderMocks.pizzaDOroAccountOrderDatas)
      })
    })
    describe('getById', () => {
      it('should return an order for exiting order id', async () => {
        const result = await adapter.getById('commercialOrder')
        expect(result).toEqual(orderMocks.commercialOrderData)
      })
      it('should return undefined for inexistant id', async () => {
        const result = await adapter.getById('inexistant')
        expect(result).toEqual(undefined)
      })
      it('should return undefined for order id from unrelated account', async () => {
        const result = await adapter.getById('orderWithRebate')
        expect(result).toEqual(undefined)
      })
    })
    describe('getByProperty', () => {
      it('should return all order matching property/value', async () => {
        const result = await adapter.getByProperty('nature', 'commercial')
        expect(result).toEqual([orderMocks.commercialOrderData, orderMocks.orderWithNoItemsData])
      })
      it('should return empty array for inexistant property', async () => {
        const result = await adapter.getByProperty('inexistant', 'plop')
        expect(result).toEqual([])
      })
      it('should return empty array for inexistant value', async () => {
        const result = await adapter.getByProperty('clientAccountId', 'inexistant')
        expect(result).toEqual([])
      })
    })
  })
  describe('for a non existing account', () => {
    beforeAll(() => {
      adapter = createOrderAdapterInMemory('account99')
    })
    describe('getById', () => {
      it('should return undefined for exsiting order id', async () => {
        const result = await adapter.getById('commercialOrder')
        expect(result).toEqual(undefined)
      })
    })
    describe('getAll', () => {
      it('return empty array', async () => {
        const result = await adapter.getAll()
        expect(result).toEqual([])
      })
    })
  })
})
