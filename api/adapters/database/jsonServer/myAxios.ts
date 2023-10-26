import axios from 'axios'
import type { AxiosResponse, Method } from 'axios'
export const myAxios = axios.create({
  baseURL: 'http://localhost:3057/',
  timeout: 1000
})

export const handleRequest =
  (httpMethod: Method) =>
  async <T>(url: string, data?: any): Promise<T | undefined> => {
    try {
      const response: AxiosResponse = await myAxios.request({
        url,
        method: httpMethod,
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
