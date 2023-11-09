import axios from 'axios'
import Cookies from 'js-cookie'
import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'

const API_URL = 'http://127.0.0.1:8787'

export const getAllUserAccounts = async () => {
  const url = `${API_URL}/user/accounts`
  // console.log('app/composables/getUser.ts - url:', url)
  const token = Cookies.get('token')
  console.log('app/composables/getUser.ts - token', token)
  if (!token) {
    throw new Error('► app/composables/getUser → No token found')
  }
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('app/composables/getAllUserAccounts - data:', data)
    return convertStringsToDates(data)
  } catch (error: any) {
    console.error(
      `► app/composables/getUser → Error when attempting to retrieve user data: (${error.response.status}): ${error.response.data.error}`
    )
    return error.response.data
  }
}
