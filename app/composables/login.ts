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
  } catch (error) {
    // ToDo: reactivate this log during dev ??
    // TODO: how to I get the errors from the api use case ?
    console.error('app/composables/login → Login error: Invalid identifier or password')
    // console.log('app/composables/login → Login error:', error)
    // throw error
  }
}

// const res = await fetch(`${process.env.API_URL}/login`, {
//   method: 'POST',
//   body: JSON.stringify({
//     identifier,
//     password
//   })
// })
// const user = await res.json()
// return user
