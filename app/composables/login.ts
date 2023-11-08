import { useActiveAccount } from './useActiveAccount'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useActiveUser } from './useActiveUser'
const API_URL = 'http://127.0.0.1:8787'

const user = useActiveUser()
export const login = async (identifier, password) => {
  const url = `${API_URL}/user/login`
  try {
    // Fetch token & store it in a cookie
    const { data } = await axios.post(url, {
      identifier,
      password
    })
    const token = data.token
    console.log(`► app/composables/login → token:`, token)
    Cookies.set('token', token)

    // Fetch user data and store it in local storage
    const userResponse = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    user.value = userResponse.data
    console.log(`► app/composables/login → user:`, userResponse.data)

    // return { token, user: userResponse.data }
    // // Note: Storing the token in the Authorization header like this will only affect the current instance of axios.
    // // It is not a persistent change and will need to be set again after page reloads.
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // return token // You should return the token to be consistent with your test expectation
  } catch (error: any) {
    console.error(
      `► app/composables/login → Login error (${error.response.status}): ${error.response.data.error}`
    )
    // Delete the cookie
    Cookies.remove('token')

    // Clear all data from local storage
    user.value = null
    const activeAccount = useActiveAccount()
    activeAccount.value = null
    const useAccounts = useActiveAccount()
    useAccounts.value = null

    return error.response.data
  }
}
