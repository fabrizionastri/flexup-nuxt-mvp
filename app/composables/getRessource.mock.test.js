import { getResource } from './getRessource.js'

import axios from 'axios'
import { vi } from 'vitest'
// Mocking the axios library
vi.mock('axios')

describe('getResource Composable', () => {
  afterEach(() => {
    // Clear all mocks after each test
    vi.clearAllMocks()
  })

  it('fetches the specified resource without any filter', async () => {
    const mockData = [{ id: 1 }, { id: 2 }]
    axios.get.mockResolvedValueOnce({ data: mockData })

    const result = await getResource('account')

    expect(result).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:8787/account')
  })

  it('fetches the specified resource with a filter', async () => {
    const mockData = [
      { id: 1, name: 'Plop' },
      { id: 2, name: 'Bib' }
    ]
    axios.get.mockResolvedValueOnce({ data: mockData })

    const result = await getResource('account', 'name', 'Plop')

    expect(result).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:8787/account?name=Plop')
  })

  it('handles errors gracefully', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'))

    await expect(getResource('account')).rejects.toThrow('API Error')
  })
})
