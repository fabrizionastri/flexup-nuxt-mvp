import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()
const API_URL = process.env.API_URL

export const selectDb = async (selectedDb: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/db/${selectedDb}`)
    // console.log('Vue → selectedDb function:', data)
    return data
  } catch (error) {
    console.error(error)
  }
}
