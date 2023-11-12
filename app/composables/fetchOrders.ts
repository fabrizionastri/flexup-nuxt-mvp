import axios from './myAxios'

export const fetchOrders = async (accountId: string) => {
  const url = `/order/${accountId}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log('Vue → fetchOrders: Not OK')
    console.error(error)
  }
}
