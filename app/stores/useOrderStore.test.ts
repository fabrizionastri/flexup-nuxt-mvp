import { useOrderStore } from './useOrderStore'
import { convertStringsToDates, sortById } from '../../lib/utils'
import { createPinia, setActivePinia } from 'pinia'
import * as mock from '../../mock/inMemory'

describe('app/stores/orderStore', () => {
  describe('fetchOrder', () => {
    let orderStore
    beforeEach(() => {
      setActivePinia(createPinia())
      orderStore = useOrderStore()
    })
    it('should return a order when valid token is provided', async () => {
      const token = mock.totoUserToken
      const result = await orderStore.fetchAllOrders('pizzaDOroAccount', token)
      const expected = mock.pizzaDOroAccountOrders
      expect(convertStringsToDates(sortById(result))).toEqual(sortById(expected))
      it('should return an error when invalid token is provided', async () => {
        const token = 'invalid'
        await expect(orderStore.fetchAllOrders('pizzaDOroAccount', token)).rejects.toThrowError(
          'Invalid token'
        )
      })
    })
  })
})
