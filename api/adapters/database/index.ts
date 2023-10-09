import { config } from 'dotenv'

import { createItemAdapterInMemory } from './inMemory/createItemAdapterInMemory'
import { createOrderAdapterInMemoryForAccountId } from './inMemory/createOrderAdapterInMemoryForAccountId'
import { createItemAdapterJsonServer } from './jsonServer/createItemAdapterJsonServer'
import { createOrderAdapterJsonServer } from './jsonServer/createOrderAdapterJsonServer'

config() // load variables from .env into process.env

console.log('Adapter Index: process.env.STORAGE_TYPE before', process.env.STORAGE_TYPE)
if (!process.env.STORAGE_TYPE) {
  process.env.STORAGE_TYPE = 'InMemory'
}
console.log('Adapter Index: process.env.STORAGE_TYPE after', process.env.STORAGE_TYPE)

let createItemAdapter: any
let createOrderAdapter: any

switch (process.env.STORAGE_TYPE) {
  case 'inMemory':
    createItemAdapter = createItemAdapterInMemory
    createOrderAdapter = createOrderAdapterInMemoryForAccountId
    break
  case 'jsonServer':
    createItemAdapter = createItemAdapterJsonServer
    createOrderAdapter = createOrderAdapterJsonServer
    break
  default:
    throw new Error('Core → getAllOrdersForAccountId : Invalid storage type')
}

export { createItemAdapter, createOrderAdapter }
