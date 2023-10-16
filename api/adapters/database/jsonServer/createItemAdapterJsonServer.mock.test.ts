import { vi } from 'vitest'
import type { Mock } from 'vitest'

// Make sure you import this before mocking !!!
import { createItemAdapterJsonServer } from './createItemAdapterJsonServer'

// Mocking the axios library
import axios from './myAxios'
vi.mock('./myAxios')

const axiosGetMock = axios.get as Mock
const mockItem = { id: 'item1', orderId: 'order1', name: 'Test Item' }

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
      const item = await adapter.getById('item1')
      expect(item).toEqual(mockItem)
    })

    it('should have been called with the right url', async () => {
      await adapter.getById('item1')
      expect(axiosGetMock).toHaveBeenCalledWith('/item/item1')
    })
  })

  describe('getByOrderId', () => {
    it('should return empty array if getByOrderId has no result', async () => {
      await adapter.getByOrderId('order1')
      expect(axiosGetMock).toHaveBeenCalledWith('/item?orderId=order1')
    })
  })
})
