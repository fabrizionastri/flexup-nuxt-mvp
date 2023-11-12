import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.API_Base_URL || 'http://127.0.0.1:8787'

export const fetchOrders = async (accountId: string) => {
  const url = `${baseUrl}/order/${accountId}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log('Vue → fetchOrders: Not OK')
    console.error(error)
  }
}
