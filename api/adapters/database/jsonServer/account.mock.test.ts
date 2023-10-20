import { vi } from 'vitest'
import type { Mock } from 'vitest'

// Make sure you import this before mocking !!!
import { createGenericAdapter } from './_generic'

// Mocking the myAxios library
import axios from './myAxios'
vi.mock('./myAxios')
const axiosGetMock = axios.get as Mock
const mockEntity = { id: 'entity1', name: 'Test Entity' }

// Create custom adapter
const customAdapter = createGenericAdapter('account')

describe('createGenericAdapter - mock Axios', () => {
  beforeEach(() => {
    // Reset the mock before each test
    axiosGetMock.mockReset()
    axiosGetMock.mockResolvedValueOnce(mockEntity)
  })

  describe('getById', () => {
    it('should return an entity when called with id', async () => {
      const result = await customAdapter.getById('entity1')
      expect(result).toEqual(mockEntity)
    })

    it('should have been called with the right url', async () => {
      await customAdapter.getById('entity1')
      expect(axiosGetMock).toHaveBeenCalledWith('/account/entity1')
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      const results = await customAdapter.getByProperty('name', 'Test Entity')
      expect(results).toContain(mockEntity)
    })

    it('should have been called with the right url', async () => {
      await customAdapter.getByProperty('name', "Pizza d'Oro")
      expect(axiosGetMock).toHaveBeenCalledWith("/account?name=Pizza%20d'Oro")
    })
  })
})
