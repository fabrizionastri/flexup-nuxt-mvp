// fetchToken.ts
import axios from './myAxios'

export const fetchToken = async (identifier, password) => {
  try {
    const data = await axios.post('/user/login', { identifier, password })
    // console.log('►app/composables/fetchToken.ts - accounts data:', data)
    return data.token
  } catch (error) {
    // Handle the error here
    // This can be just returning the error or further processing based on your application's needs
    return error
  }
}
