// app/composables/myAxios.ts

import axios from 'axios'
import type { AxiosResponse, AxiosError, Method } from 'axios'

// import dotenv from 'dotenv'
// dotenv.config()
const apiBaseUrl = process.env.API_Base_URL || 'http://127.0.0.1:8787'

console.log('apiBaseUrl:', apiBaseUrl)

const myAxios = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000
})

const handleRequest =
  (method: Method) =>
  async <T>(url: string, data?: any, token: string = ''): Promise<T | undefined> => {
    let config = {}
    if (token)
      config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    try {
      const response: AxiosResponse = await myAxios.request({
        url,
        method,
        data,
        ...config
      })
      // Check if the status code is not in the 200 range
      if (response.status >= 300) {
        // Throw an error with the error message from the response
        throw new Error(response.data.error || 'Unknown error')
      }
      // console.log('app/composables/myAxios.ts - response.data:', response.data)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        // Throw an error with the error message from the response
        throw new Error(axiosError.response.data.error || axiosError.message)
      }
      throw error // Throw the original error if it's not an AxiosError
    }
  }

export default {
  get: (url, token = '') => handleRequest('get')(url, undefined, token),
  post: (url, data, token = '') => handleRequest('post')(url, data, token),
  delete: handleRequest('delete'),
  put: handleRequest('put')
}
