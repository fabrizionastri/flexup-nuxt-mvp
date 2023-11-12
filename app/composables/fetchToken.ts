// fetchToken.ts
import axios from './myAxios'

interface ResponseData {
  token: string
}
export const fetchToken = async (identifier: string, password: string): Promise<ResponseData> => {
  const data = await axios.post('/user/login', { identifier, password })
  return data.token
}
