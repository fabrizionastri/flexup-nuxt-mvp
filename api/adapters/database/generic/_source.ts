import * as inMemoryMethods from '../inMemory/methods'
import * as jsonServerMethods from '../jsonServer/methods'

import { config } from 'dotenv'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'inMemory'
// const dataSource: string = 'jsonServer'

// console.log('Adapter method source:', dataSource)

let adapterMethods: { [key: string]: any }
if (dataSource === 'inMemory') adapterMethods = inMemoryMethods
else if (dataSource === 'jsonServer') adapterMethods = jsonServerMethods
else throw new Error('Adapters Database index : Invalid storage type')

export default adapterMethods
