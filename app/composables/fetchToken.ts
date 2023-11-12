// fetchToken.js
import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.API_Base_URL || 'http://127.0.0.1:8787'

export const fetchToken = async (identifier, password) => {
  try {
    const { data } = await axios.post(`${baseUrl}/user/login`, {
      identifier,
      password
    })
    return data.token
  } catch (error: any) {
    return error.response.data
  }
}
