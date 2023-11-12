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
    axios.get = vi.fn().mockResolvedValue(mockData)
    const token = 'mockToken'
    const result = await fetchAccounts(token)
    expect(axios.get).toHaveBeenCalledWith('/account', 'mockToken')
    expect(result).toEqual(mockData)
  })

  it('fetches accounts with specific statuses', async () => {
    const mockData = [{ id: 2, name: 'Account 2' }]
    axios.get = vi.fn().mockResolvedValue(mockData)
    const token = 'mockToken'
    const accountStatuses: AccountStatus[] = ['active', 'pending']
    const result = await fetchAccounts(token, accountStatuses)
    expect(axios.get).toHaveBeenCalledWith('/account?status=active,pending', 'mockToken')
    expect(result).toEqual(mockData)
  })

  it('fetches accounts with active statuses', async () => {
    const mockData = [{ id: 2, name: 'Account 2' }]
    axios.get = vi.fn().mockResolvedValue(mockData)
    const token = 'mockToken'
    const accountStatuses: AccountStatus[] = ['active']
    const result = await fetchAccounts(token, accountStatuses)
    expect(axios.get).toHaveBeenCalledWith('/account?status=active', 'mockToken')
    expect(result).toEqual(mockData)
  })
  it('should return an error message user when invalid credentials are provided', async () => {
    const token = 'invalid'
    axios.get = vi.fn().mockRejectedValue(new Error('Error fetching'))
    await expect(fetchAccounts(token)).rejects.toThrowError('Error fetching')
  })
})
