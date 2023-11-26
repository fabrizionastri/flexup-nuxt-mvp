import { createPinia, setActivePinia } from 'pinia'
import type { AccountStatus } from '../../lib/entities/account'
import axios from '../utils/myAxios'
import { useAccountStore } from './useAccountStore'

vi.mock('../utils/myAxios')

describe('fetchAccounts', () => {
  let accountStore
  beforeEach(() => {
    setActivePinia(createPinia())
    accountStore = useAccountStore()
    vi.resetAllMocks()
  })

  it('fetches accounts successfully', async () => {
    const mockData = [{ id: 1, name: 'Account 1' }]
    axios.get = vi.fn().mockResolvedValue(mockData)
    const token = 'mockToken'
    const result = await accountStore.fetchAccounts(token)
    expect(axios.get).toHaveBeenCalledWith('/account', 'mockToken')
    expect(result).toEqual(mockData)
  })

  it('fetches accounts with specific statuses', async () => {
    const mockData = [{ id: 2, name: 'Account 2' }]
    axios.get = vi.fn().mockResolvedValue(mockData)
    const token = 'mockToken'
    const accountStatuses: AccountStatus[] = ['active', 'pending']
    const result = await accountStore.fetchAccounts(token, accountStatuses)
    expect(axios.get).toHaveBeenCalledWith('/account?status=active,pending', 'mockToken')
    expect(result).toEqual(mockData)
  })

  it('fetches accounts with active statuses', async () => {
    const mockData = [{ id: 2, name: 'Account 2' }]
    axios.get = vi.fn().mockResolvedValue(mockData)
    const token = 'mockToken'
    const accountStatuses: AccountStatus[] = ['active']
    const result = await accountStore.fetchAccounts(token, accountStatuses)
    expect(axios.get).toHaveBeenCalledWith('/account?status=active', 'mockToken')
    expect(result).toEqual(mockData)
  })
  it('should return an error message user when invalid credentials are provided', async () => {
    const token = 'invalid'
    axios.get = vi.fn().mockRejectedValue(new Error('Error fetching'))
    await expect(accountStore.fetchAccounts(token)).rejects.toThrowError('Error fetching')
  })
})
