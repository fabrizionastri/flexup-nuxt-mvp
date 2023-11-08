// fetchToken.js
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8787'

export const fetchToken = async (identifier, password) => {
  try {
    const { data } = await axios.post(`${API_URL}/user/login`, {
      identifier,
      password
    })
    return data.token
  } catch (error: any) {
    return error.response.data
  }
}
