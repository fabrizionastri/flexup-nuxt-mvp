import { createOrderGateway } from 'gateways/orderGateway'
import { orderDatas, orders } from 'mock/inMemory'

import { ItemAdapter, OrderAdapter } from 'adapters/database/adapterInterfaces'
import { createItemAdapter } from 'adapters/database/index'
import { createOrderAdapter } from 'adapters/database/index'

import { OrderGateway } from './gatewayInterfaces'

let orderAdapter: OrderAdapter
let itemAdapter: ItemAdapter
let orderGateway: OrderGateway

describe('orderGateway', () => {
  describe('for existing account', () => {
    beforeEach(() => {
      orderAdapter = createOrderAdapter('account0')
      itemAdapter = createItemAdapter()
      orderGateway = createOrderGateway(orderAdapter, itemAdapter)
    })
    it('getByIdData should return the order with raw data only', async () => {
      const result = await orderGateway.getByIdData('order0')
      expect(result).toEqual(orderDatas[0])
    })
    it('getAllData should return all orders with items and calculations', async () => {
      const result = await orderGateway.getAllData()
      expect(result).toEqual(orderDatas.slice(0, 2))
    })
    it('getById should return the order with items and calculations', async () => {
      const result = await orderGateway.getById('order0')
      expect(result).toEqual(orders[0])
    })
    it('getAll should return all orders for this account', async () => {
      const result = await orderGateway.getAll()
      expect(result).toEqual(orders.slice(0, 2))
    })
  })

  describe('for inexisting account', () => {
    beforeEach(() => {
      orderAdapter = createOrderAdapter('account99')
      itemAdapter = createItemAdapter()
      orderGateway = createOrderGateway(orderAdapter, itemAdapter)
    })
    it('getByIdData should return undefined', async () => {
      const result = await orderGateway.getByIdData('order0')
      expect(result).toBeUndefined()
    })
    it('getAllData should return []', async () => {
      const result = await orderGateway.getAllData()
      expect(result).toEqual([])
    })
    it('getById should return undefined', async () => {
      const result = await orderGateway.getById('order0')
      expect(result).toBeUndefined()
    })
    it('getAll should return all []', async () => {
      const result = await orderGateway.getAll()
      expect(result).toEqual([])
    })
  })
})
