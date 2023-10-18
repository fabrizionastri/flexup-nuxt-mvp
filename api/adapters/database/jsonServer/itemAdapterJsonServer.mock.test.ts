import { vi } from 'vitest'
import type { Mock } from 'vitest'

// Make sure you import this before mocking !!!
import { createItemAdapterJsonServer } from './itemAdapterJsonServer'

// Mocking the axios library
import axios from './myAxios'
vi.mock('./myAxios')

const axiosGetMock = axios.get as Mock
const mockItem = {
  id: 'commercialOrder_item1',
  orderId: 'commercialOrder',
  name: 'Test Item'
}

const adapter = createItemAdapterJsonServer()

describe('createItemAdapterJsonServer - mock Axios', () => {
  beforeEach(() => {
    // Reset the mock before each test
    axiosGetMock.mockReset()
    axiosGetMock.mockResolvedValueOnce(mockItem)

    // Instantiate the adapter before each test
  })

  describe('getById', () => {
    it('should return items when called with order id', async () => {
      const result = await adapter.getById('commercialOrder_item1')
      expect(result).toEqual(mockItem)
    })

    it('should have been called with the right url', async () => {
      await adapter.getById('commercialOrder_item1')
      expect(axiosGetMock).toHaveBeenCalledWith('/item/commercialOrder_item1')
    })
  })

  describe('getByOrderId', () => {
    it('should return empty array if getByOrderId has no result', async () => {
      await adapter.getByOrderId('orderWithRebate')
      expect(axiosGetMock).toHaveBeenCalledWith('/item?orderId=orderWithRebate')
    })
  })

  describe('getByProperty', () => {
    it('should have been called with the right url', async () => {
      await adapter.getByProperty('orderId', 'commercialOrder')
      expect(axiosGetMock).toHaveBeenCalledWith('/item?orderId=commercialOrder')
    })
  })
})
