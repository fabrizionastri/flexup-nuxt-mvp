import { vi } from 'vitest'
import type { Mock } from 'vitest'

// Make sure you import this before mocking !!!
import { createItemAdapterJsonServer } from './createItemAdapterJsonServer'

// Mocking the axios library

// Option 1 - mock axios
// import axios from 'axios'
// vi.mock('axios')

// Optio 2 - mock myAxios
import axios from './myAxios' // je n'arrive pas à faire fonctionner myAxios, donc j'utilise axios tout simplement
vi.mock('./myAxios')

const axiosGetMock = axios.get as Mock
const mockItem = { id: 'item1', orderId: 'order1', name: 'Test Item' }
// let adapter: ReturnType<typeof createItemAdapterJsonServer>
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
      const item = await adapter.getById('item1')
      expect(axiosGetMock).toHaveBeenCalledWith('/item/item1')
    })
  })

  describe('getByOrderId', () => {
    it('should return empty array if getByOrderId has no result', async () => {
      const item = await adapter.getByOrderId('order1')
      expect(axiosGetMock).toHaveBeenCalledWith('/item?orderId=order1')
    })
  })
})
