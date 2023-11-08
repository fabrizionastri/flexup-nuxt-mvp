import axios from 'axios'

const API_URL = 'http://127.0.0.1:8787'

export const fetchUser = async (token) => {
  try {
    const { data } = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (error: any) {
    return error.response.data
  }
}
