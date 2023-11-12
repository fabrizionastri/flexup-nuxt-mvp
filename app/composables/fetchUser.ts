import { config } from 'dotenv'
// app\composables\fetchUser.ts

import type { User } from 'lib/entities'
import axios from './myAxios'

export const fetchUser = async (token: string): Promise<User> => {
  const data = await axios.get<User>(`/user`, token)
  return data
}
