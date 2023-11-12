import type { AccountStatus } from './../../lib/entities/account'
import axios from './myAxios'
import { fetchAccounts } from './fetchAccounts' // Adjust the import path as necessary

vi.mock('./myAxios')

describe('fetchAccounts', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('fetches accounts successfully', async () => {
    const mockData = [{ id: 1, name: 'Account 1' }]
    axios.get = vi.fn().mockResolvedValue({ data: mockData })
    const token = 'mockToken'
    const result = await fetchAccounts(token)
    expect(axios.get).toHaveBeenCalledWith('/account', {
      headers: {
        Authorization: 'Bearer mockToken'
      }
    })
    expect(result).toEqual(mockData)
  })

  //   it('fetches accounts with specific statuses', async () => {
  //     const mockData = [{ id: 2, name: 'Account 2' }]
  //     axios.get = vi.fn().mockResolvedValue({ data: mockData })
  //     const token = 'mockToken'
  //     const accountStatuses: AccountStatus[] = ['active', 'pending']
  //     const result = await fetchAccounts(token, accountStatuses)
  //     expect(axios.get).toHaveBeenCalledWith('/account?status=active,pending', {
  //       headers: {
  //         Authorization: 'Bearer mockToken'
  //       }
  //     })
  //     expect(result).toEqual(mockData)
  //   })
  //
  //   it('fetches accounts with active statuses', async () => {
  //     const mockData = [{ id: 2, name: 'Account 2' }]
  //     axios.get = vi.fn().mockResolvedValue({ data: mockData })
  //     const token = 'mockToken'
  //     const accountStatuses: AccountStatus[] = ['active']
  //     const result = await fetchAccounts(token, accountStatuses)
  //     expect(axios.get).toHaveBeenCalledWith('/account?status=active', {
  //       headers: {
  //         Authorization: 'Bearer mockToken'
  //       }
  //     })
  //     expect(result).toEqual(mockData)
  //   })
  //
  //   it('handles fetch error', async () => {
  //     const errorMessage = { message: 'Error fetching' }
  //     axios.get = vi.fn().mockRejectedValue({ response: { data: errorMessage } })
  //     const token = 'mockToken'
  //     const result = await fetchAccounts(token)
  //     expect(axios.get).toHaveBeenCalled()
  //     expect(result).toEqual(errorMessage)
  //   })
})
