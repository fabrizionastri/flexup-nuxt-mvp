// fetchToken.ts
import axios from './myAxios'

interface ResponseData {
  token: string
}
export const fetchToken = async (identifier: string, password: string): Promise<string> => {
  const data = await axios.post<ResponseData>('/user/login', { identifier, password })
  return data.token
}
