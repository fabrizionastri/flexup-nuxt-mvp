import axios from '../myAxios'

// Mocking the myAxios library
import { vi } from 'vitest'
import type { Mock } from 'vitest'
vi.mock('../myAxios')
vi.mock('../methods/assertPropertyExists')
const axiosGetMock = axios.get as Mock

let result: any
let mockEntity, mockEntity1, mockEntity2: any

import { accountAdapter } from './account'
describe('createGenericAdapter - mock Axios', () => {
  beforeEach(() => {
    // Reset the mock before each test
    axiosGetMock.mockReset()
  })
  describe('getById', () => {
    it('should have been called with the right url', async () => {
      await accountAdapter.getById('id1')
      expect(axiosGetMock).toHaveBeenCalledWith('/account/id1')
    })
    it('should return an entity when called with id', async () => {
      mockEntity = { id: 'id1', name: 'Test Entity' }
      axiosGetMock.mockResolvedValue(mockEntity)
      result = await accountAdapter.getById('entity1')
      expect(result).toEqual(mockEntity)
    })
  })

  describe('getByProperty', () => {
    it('should return accounts based on a property and its value', async () => {
      // this tests seems useless, as it always retruns true ...
      mockEntity = { id: 'id1', name: 'Test Entity' }
      axiosGetMock.mockResolvedValue([mockEntity])
      result = await accountAdapter.getByProperty('name', 'Test Entity')
      expect(result).toEqual([mockEntity])
    })

    it('should have been called with the right url', async () => {
      await accountAdapter.getByProperty('name', "Pizza d'Oro")
      expect(axiosGetMock).toHaveBeenCalledWith("/account?name=Pizza%20d'Oro")
    })
  })

  describe('getByProperties', () => {
    beforeEach(async () => {
      mockEntity1 = { status: 'active', type: 'subaccount', name: 'Test Entity 1' }
      mockEntity2 = { status: 'active', type: 'subaccount', name: 'Test Entity 2' }
      axiosGetMock.mockResolvedValueOnce([mockEntity1])
      axiosGetMock.mockResolvedValueOnce([mockEntity2])
    })
    it('and - should have been called with the right url', async () => {
      result = await accountAdapter.getByProperties('status', 'active', 'type', 'subaccount', 'and')
      expect(axiosGetMock).toHaveBeenCalledWith('/account?status=active&type=subaccount')
    })
    it('or - should have been called with the right url', async () => {
      result = await accountAdapter.getByProperties('status', 'active', 'type', 'subaccount', 'or')
      expect(axiosGetMock).toHaveBeenCalledWith('/account?status=active')
      expect(axiosGetMock).toHaveBeenCalledWith('/account?type=subaccount')
      expect(axiosGetMock).toHaveBeenCalledTimes(2)
    })
    it('should retrieve entities based on property1/value1 and property2/value2', async () => {
      result = await accountAdapter.getByProperties('status', 'active', 'type', 'subaccount', 'or')
      // console.log('account.mock.test.ts - myresult:', result)
      expect(result).toEqual([mockEntity1, mockEntity2])
    })
  })
})
