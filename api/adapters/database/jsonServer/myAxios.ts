// src/adapters/database/Adapters/jsonServer/item.jsonServer.Adapter.ts
import axios, { AxiosResponse, Method } from 'axios'

// import { config } from 'dotenv'
// config() // load variables from .env into process.env
const DB_URL = process.env.DB_URL || 'http://localhost:3057'

export const myAxios = axios.create({
  baseURL: DB_URL,
  timeout: 1000
})

export const handleRequest =
  (httpMethod: Method) =>
  async <Item>(url: string, data?: any): Promise<Item | undefined> => {
    console.log('MyAxios DB_URL:', DB_URL)
    try {
      const response: AxiosResponse = await myAxios.request({
        url,
        method: httpMethod,
        data
      })
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
