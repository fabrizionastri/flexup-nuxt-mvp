import { useActiveAccount, useAllUserAccounts, useActiveUser } from './'
import axios from 'axios'
import Cookies from 'js-cookie'
const API_URL = 'http://127.0.0.1:8787'

const user = useActiveUser()
const accounts = useAllUserAccounts()
const activeAccount = useActiveAccount()

export const login = async (identifier, password) => {
  const url = `${API_URL}/user/login`
  try {
    // Fetch token & store it in a cookie
    const { data } = await axios.post(url, {
      identifier,
      password
    })
    const token = data.token
    // console.log(`► app/composables/login → token:`, token)
    Cookies.set('token', token)

    // Fetch user data and store it in local storage
    const userResponse = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    user.value = userResponse.data
    // console.log(`► app/composables/login → user:`, userResponse.data)

    // Fetch user accounts and store them in local storage
    const accountsResponse = await axios.get(`${API_URL}/user/accounts`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    accounts.value = accountsResponse.data
    // console.log(`► app/composables/login → accounts:`, accounts)
    if (!accounts.value || accounts.value.length === 0) {
      console.log(`► app/composables/login → No accounts found`)
      return
    }
    activeAccount.value = accounts.value[0]
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
