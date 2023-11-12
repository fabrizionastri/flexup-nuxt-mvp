// app/composables/fetchAccounts.ts

import axios from './myAxios'
import type { Account, AccountStatus } from 'lib/entities'

export const fetchAccounts = async (
  token: string,
  accountStatuses: AccountStatus[] = []
): Promise<Account[]> => {
  let url = `/account`
  if (accountStatuses.length > 0) {
    const queryString = `status=${accountStatuses.join(',')}`
    url += `?${queryString}`
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const data = await axios.get<Account[]>(url, config)

  // console.log('app/composables/fetchAccounts.ts - accounts data:', data)
  return data
}
