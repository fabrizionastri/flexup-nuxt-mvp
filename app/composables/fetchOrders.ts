import axios from 'axios'

const API_URL = 'http://127.0.0.1:8787'

export const fetchOrders = async (accountId: string) => {
  const url = `${API_URL}/order/${accountId}`
  // console.log('process.env:', process.env.API_URL)
  // console.log('Vue → fetchOrders → url', url)
  try {
    const response = await axios.get(url)
    // console.log('OK')
    // console.log('Vue → fetchOrders:', response.data)
    return response.data
  } catch (error) {
    console.log('Vue → fetchOrders: Not OK')
    console.error(error)
  }
}
