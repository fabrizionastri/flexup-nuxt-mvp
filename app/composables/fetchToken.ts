// fetchToken.ts
import axios from './myAxios'

interface Token {
  token: string
}
export const fetchToken = async (identifier: string, password: string): Promise<string> => {
  const data = (await axios.post<Token>('/user/login', { identifier, password })) as Token
  return data.token
}
