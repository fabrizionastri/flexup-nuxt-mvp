import axios from '../myAxios'

// Mocking the myAxios library
import { vi } from 'vitest'
import type { Mock } from 'vitest'
vi.mock('../myAxios')
const axiosGetMock = axios.get as Mock

import { assertPropertyExists } from './assertPropertyExists'

describe('assertPropertyExists', () => {
  beforeEach(() => {
    // Reset the mock before each test
    axiosGetMock.mockReset()
  })
  it('should return true if property exists', async () => {
    const entityName = 'account'
    const property = 'name'
    const sampleData = [{ name: 'value' }]
    axiosGetMock.mockResolvedValue(sampleData)
    const result = await assertPropertyExists(entityName, property)
    expect(result).toBe(true)
  })

  it('should throw an error if property does not exist', async () => {
    const entityName = 'account'
    const property = 'invalid'
    const sampleData = [{ name: 'value' }]
    axiosGetMock.mockResolvedValue(sampleData)
    await expect(assertPropertyExists(entityName, property)).rejects.toThrow()
  })
  it('should throw an error if property does not exist', async () => {
    const entityName = 'account'
    const property = 'name'
    const sampleData = [{ invalid: 'value' }]
    axiosGetMock.mockResolvedValue(sampleData)
    await expect(assertPropertyExists(entityName, property)).rejects.toThrow()
  })
})
