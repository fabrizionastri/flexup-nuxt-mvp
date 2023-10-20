import * as inMemory from './inMemory'
import * as jsonServer from './jsonServer'

import { config } from 'dotenv'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'inMemory'
// const dataSource: string = 'jsonServer'

console.log('Adapters data source:', dataSource)

let adapters: { [key: string]: any }

if (dataSource === 'inMemory') adapters = inMemory
else if (dataSource === 'jsonServer') adapters = jsonServer
else throw new Error('Adapters Database index : Invalid storage type')

// console.log('index.ts - adapters:', adapters)
export default adapters

export { adapters }

// for (const key in adapters) {
//   if (Object.prototype.hasOwnProperty.call(adapters, key)) {
//     console.log('index.ts - key in adapters:', key)
//     exports[key] = adapters[key]
//   }
// }
