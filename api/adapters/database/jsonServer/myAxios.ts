// src/adapters/database/Adapters/jsonServer/item.jsonServer.Adapter.ts
import axios, { AxiosResponse, Method } from 'axios'
export const myAxios = axios.create({
  baseURL: 'http://localhost:3057/',
  timeout: 1000
})

export const handleRequest =
  (httpMethod: Method) =>
  async <Item>(url: string, data?: any): Promise<Item | undefined> => {
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
