// app/stores/useOrderStore.test.ts

import { useOrderStore } from './useOrderStore'
import { convertStringsToDates, sortById } from '../../lib/utils'
import { createPinia, setActivePinia } from 'pinia'
import * as mock from '../../mock/inMemory'

describe('app/stores/orderStore', () => {
  describe('fetchAndUpdateAllOrders', () => {
    let orderStore
    beforeEach(() => {
      setActivePinia(createPinia())
      orderStore = useOrderStore()
    })
    it('should return this of all orders for account when valid accountId and token are provided', async () => {
      const token = mock.totoUserToken
      const received = await orderStore.fetchAndUpdateAllOrders('pizzaDOroAccount', token)
      const expected = mock.pizzaDOroAccountOrders
      expect(convertStringsToDates(sortById(received))).toEqual(sortById(expected))
    })
    it.skip('should return this of all orders for account when valid accountId and token are provided', async () => {
      const token = mock.fabrizioUserToken
      const received = await orderStore.fetchAndUpdateAllOrders('fabrizioAccount', token)
      const expected = mock.fabrizioAccountOrders
      expect(convertStringsToDates(sortById(received))).toEqual(sortById(expected))
    })
    it('should return an error when invalid token is provided', async () => {
      const token = 'invalid'
      await expect(
        orderStore.fetchAndUpdateAllOrders('pizzaDOroAccount', token)
      ).rejects.toThrowError('Invalid token')
    })
    it('should return [ ] when invalid accountId is provided', async () => {
      const token = mock.totoUserToken
      expect(await orderStore.fetchAndUpdateAllOrders('invalid', token)).toEqual([])
    })
  })

  describe.only('getOrder', () => {
    let orderStore
    beforeEach(async () => {
      setActivePinia(createPinia())
      orderStore = useOrderStore()
      const token = mock.fabrizioUserToken
      await orderStore.fetchAndUpdateAllOrders('fabrizioAccount', token)
    })
    it('should return a order when valid token is provided', async () => {
      const received = await orderStore.getOrder('orderWithNoItems')
      // console.log('► app/stores/useOrderStore.test.ts → - received:', received)
      const expected = mock.orderWithNoItems
      expect(convertStringsToDates(received)).toEqual(expected)
    })
    it.skip('should return a order when valid token is provided', async () => {
      const received = await orderStore.getOrder('fundingOrder')
      const expected = mock.fundingOrder
      expect(convertStringsToDates(received)).toEqual(expected)
    })
    it('should return an error when invalid token is provided', () => {
      expect(orderStore.getOrder('invalid')).toBeUndefined()
    })
  })
})
