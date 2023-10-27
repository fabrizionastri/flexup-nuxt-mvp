import * as inMemory from './inMemory'
import * as jsonServer from './jsonServer'
import * as generic from './generic'

import { config } from 'dotenv'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'inMemory'
// const dataSource: string = 'jsonServer'

// console.log('Adapters data source:', dataSource)

let adapters: { [key: string]: any }
if (dataSource === 'inMemory') adapters = inMemory
else if (dataSource === 'jsonServer') adapters = jsonServer
else throw new Error('Adapters Database index : Invalid storage type')

adapters = { ...adapters, ...generic }

export default adapters

export { adapters }
