import axios from 'axios'
import Cookies from 'js-cookie'
import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'

import dotenv from 'dotenv'
dotenv.config()
const baseUrl = process.env.API_Base_URL || 'http://127.0.0.1:8787'

export const getUser = async () => {
  const url = `${baseUrl}/user`
  // console.log('app/composables/getUser.ts - url:', url)
  const token = Cookies.get('token')
  // console.log('app/composables/getUser.ts - token', token)
  if (!token) {
    throw new Error('► app/composables/getUser → No token found')
  }
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // console.log('app/composables/getUser.ts - data:', data)
    return convertStringsToDates(data)
  } catch (error: any) {
    console.error(
      `► app/composables/getUser → Error when attempting to retrieve user data: (${error.response.status}): ${error.response.data.error}`
    )
    return error.response.data
  }
}
