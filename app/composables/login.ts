import axios from 'axios'
import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'
// const API_URL = process.env.API_URL || 'http://127.0.0.1:8787' // ceci ne fonctionne pas
const API_URL = 'http://127.0.0.1:8787'

export const login = async (identifier, password) => {
  const url = `${API_URL}/user/login`
  // console.log('login.ts - url:', url)
  try {
    const { data } = await axios.post(url, {
      identifier,
      password
    })
    // console.log('login.ts - :data', data)
    return convertStringsToDates(data)
  } catch (error: any) {
    // console.error(
    //   `► app/composables/login → Login error (${error.response.status}): ${error.response.data.error}`
    // )
    return error.response.data
    // throw new Error(error.response.data)
  }
}
