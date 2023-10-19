import axios from 'axios'
// const API_URL = process.env.API_URL || 'http://127.0.0.1:8787' // ceci ne fonctionne pas
const API_URL = 'http://127.0.0.1:8787'

export const getResource = async (resource, prop = null, value = '') => {
  if (!resource) {
    throw new Error('Resource must be provided')
  }

  let url = `${API_URL}/resources/${resource}`
  if (prop !== null) {
    url += `?${prop}=${encodeURIComponent(value)}`
  }
  // conasole.log(`app/composables/getResource.js → url for resource "${resource}"`, url)

  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    // ToDo: reactivate this log during dev ??
    // console.error(`Error fetching resource "${resource}" on: `, url)
    // console.log('error:', error)
    throw error
  }
}

export default getResource

export const getAccounts = (prop = null, value = '') => getResource('account', prop, value)
