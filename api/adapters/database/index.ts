import { config } from 'dotenv'

import {
  createItemAdapterInMemory,
  createOrderAdapterInMemory,
  createTrancheAdapterInMemory
} from './inMemory'
import { createItemAdapterJsonServer } from './jsonServer/itemAdapterJsonServer'
import { createOrderAdapterJsonServer } from './jsonServer/orderAdapterJsonServer'

config()

// console.log('Adapter Index: process.env.STORAGE_TYPE before', process.env.STORAGE_TYPE)
if (!process.env.STORAGE_TYPE) {
  process.env.STORAGE_TYPE = 'InMemory'
}
// console.log('Adapter Index: process.env.STORAGE_TYPE after', process.env.STORAGE_TYPE)

let createItemAdapter: any
let createOrderAdapter: any
let createTrancheAdapter: any

switch (process.env.STORAGE_TYPE) {
  case 'inMemory':
    createItemAdapter = createItemAdapterInMemory
    createOrderAdapter = createOrderAdapterInMemory
    createTrancheAdapter = createTrancheAdapterInMemory
    break
  case 'jsonServer':
    createItemAdapter = createItemAdapterJsonServer
    createOrderAdapter = createOrderAdapterJsonServer
    createTrancheAdapter = createTrancheAdapterInMemory // to be replaced by createTrancheAdapterJsonServer
    break
  default:
    throw new Error('Adapters Database index : Invalid storage type')
}

export { createItemAdapter, createOrderAdapter, createTrancheAdapter }
