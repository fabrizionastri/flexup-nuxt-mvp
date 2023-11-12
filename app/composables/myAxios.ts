// app/composables/myAxios.ts

import axios from 'axios'
import type { AxiosResponse, Method } from 'axios'

import dotenv from 'dotenv'
dotenv.config()
const apiBaseUrl = process.env.API_Base_URL || 'http://127.0.0.1:8787'

console.log('apiBaseUrl:', apiBaseUrl)

const myAxios = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000
})

const handleRequest =
  (method: Method) =>
  async <T>(url: string, data?: any): Promise<T | undefined> => {
    const response: AxiosResponse = await myAxios
      .request({
        url,
        method,
        data
      })
      .catch((error) => {
        // Throw an error with a specific message or object
        throw error.response ? error.response.data : new Error('Nuxt myAxios Module Error')
      })
    return response.data
  }

export default {
  get: handleRequest('get'),
  post: handleRequest('post'),
  delete: handleRequest('delete'),
  put: handleRequest('put')
}
