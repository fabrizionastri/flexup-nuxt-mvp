import * as inMemoryAdapters from './inMemory'
import * as jsonServerAdapters from './jsonServer'

import { config } from 'dotenv'
config()

const storageType: string = process.env.STORAGE_TYPE || 'inMemory'
// const dataSource: string = 'jsonServer'

console.log('Adapters used:', storageType)

let databaseAdapters
if (storageType === 'inMemory') databaseAdapters = inMemoryAdapters
else if (storageType === 'jsonServer') databaseAdapters = jsonServerAdapters
else throw new Error('Database adapter error : invalid storage type (chose inMemory or jsonServer)')

export { databaseAdapters }

export default databaseAdapters
