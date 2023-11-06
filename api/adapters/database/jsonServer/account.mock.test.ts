import { vi } from 'vitest'
import type { Mock } from 'vitest'

import { accountAdapter } from './account'

// Mocking the myAxios library
import axios from './myAxios'
vi.mock('./myAxios')
const axiosGetMock = axios.get as Mock
let result: any
let mockEntity, mockEntity1, mockEntity2: any

describe('createGenericAdapter - mock Axios', () => {
  beforeEach(() => {
    // Reset the mock before each test
    axiosGetMock.mockReset()
  })
  describe('getById', () => {
    it('should have been called with the right url', async () => {
      await accountAdapter.getById('entity1')
      expect(axiosGetMock).toHaveBeenCalledWith('/account/entity1')
    })
    it('should return an entity when called with id', async () => {
      mockEntity = { id: 'entity1', name: 'Test Entity' }
      axiosGetMock.mockResolvedValue(mockEntity)
      result = await accountAdapter.getById('entity1')
      expect(result).toEqual(mockEntity)
    })
  })

  describe('getByProperty', () => {
    it('should retrieve entities based on a property and its value', async () => {
      mockEntity = { id: 'entity1', name: 'Test Entity' }
      axiosGetMock.mockResolvedValue(mockEntity)
      result = await accountAdapter.getByProperty('name', 'Test Entity')
      expect(result).toContain(mockEntity)
    })

    it('should have been called with the right url', async () => {
      await accountAdapter.getByProperty('name', "Pizza d'Oro")
      expect(axiosGetMock).toHaveBeenCalledWith("/account?name=Pizza%20d'Oro")
    })
  })

  describe('getByProperties', () => {
    beforeEach(async () => {
      mockEntity1 = { status: 'active', type: 'project', name: 'Test Entity 1' }
      mockEntity2 = { status: 'active', type: 'project', name: 'Test Entity 2' }
      axiosGetMock.mockResolvedValueOnce([mockEntity1])
      axiosGetMock.mockResolvedValueOnce([mockEntity2])
    })
    it('and - should have been called with the right url', async () => {
      result = await accountAdapter.getByProperties('status', 'active', 'type', 'project', 'and')
      expect(axiosGetMock).toHaveBeenCalledWith('/account?status=active&type=project')
    })
    it('or - should have been called with the right url', async () => {
      result = await accountAdapter.getByProperties('status', 'active', 'type', 'project', 'or')
      expect(axiosGetMock).toHaveBeenCalledWith('/account?status=active')
      expect(axiosGetMock).toHaveBeenCalledWith('/account?type=project')
      expect(axiosGetMock).toHaveBeenCalledTimes(2)
    })
    it('should retrieve entities based on property1/value1 and property2/value2', async () => {
      result = await accountAdapter.getByProperties('status', 'active', 'type', 'project', 'or')
      // console.log('account.mock.test.ts - myresult:', result)
      expect(result).toEqual([mockEntity1, mockEntity2])
    })
  })
})
