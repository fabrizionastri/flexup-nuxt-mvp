import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.API_Base_URL || 'http://127.0.0.1:8787'

export const fetchUser = async (token) => {
  try {
    const { data } = await axios.get(`${baseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (error: any) {
    return error.response.data
  }
}
