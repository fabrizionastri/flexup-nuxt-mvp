import axios from 'axios'
import type { AccountStatus } from 'lib/entities'

const API_URL = 'http://127.0.0.1:8787'

export const fetchAccounts = async (token, accountStatuses: AccountStatus[] = []) => {
  try {
    let url = `${API_URL}/account`
    if (accountStatuses.length > 0) {
      const queryString = `status=${accountStatuses.join(',')}`
      url += `?${queryString}`
    }

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('app/composables/fetchAccounts.ts - accounts data:', data)
    return data
  } catch (error: any) {
    return error.response.data
  }
}
