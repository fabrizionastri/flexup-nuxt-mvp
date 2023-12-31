import axios from 'axios'
import type { AxiosResponse, Method } from 'axios'

import dotenv from 'dotenv'
dotenv.config()
const jsonServerBaseUrl = process.env.JSON_SERVER_URL || 'http://localhost:3057/'

console.log('jsonServerUrl:', jsonServerBaseUrl)

const myAxios = axios.create({
  baseURL: jsonServerBaseUrl,
  timeout: 1000
})

const handleRequest =
  (method: Method) =>
  async <T>(url: string, data?: any): Promise<T | undefined> => {
    try {
      const response: AxiosResponse = await myAxios.request({
        url,
        method,
        data
      })
      // console.log(`handleRequest ${httpMethod} at url:`, url)
      return response.data
    } catch (error) {
      // console.error(error)
      return undefined
    }
  }

export default {
  get: handleRequest('get'),
  post: handleRequest('post'),
  delete: handleRequest('delete'),
  put: handleRequest('put')
}
