import { config } from 'dotenv'
// app\composables\fetchUser.ts

import type { User } from 'lib/entities'
import axios from './myAxios'

export const fetchUser = async (token: string): Promise<User> => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const data = await axios.get<User>(`/user`, config)
  return data
}
