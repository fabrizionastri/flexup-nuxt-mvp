import {
  createItemAdapterInMemory,
  createOrderAdapterInMemory,
  createTrancheAdapterInMemory
} from './inMemory'
import { createItemAdapterJsonServer } from './jsonServer/itemAdapterJsonServer'
import { createOrderAdapterJsonServer } from './jsonServer/orderAdapterJsonServer'

import { config } from 'dotenv'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'InMemory'
// const dataSource: string = 'jsonServer'

console.log('Adapters data source:', dataSource)

let createItemAdapter: any
let createOrderAdapter: any
let createTrancheAdapter: any

if (dataSource === 'inMemory') {
  createItemAdapter = createItemAdapterInMemory
  createOrderAdapter = createOrderAdapterInMemory
  createTrancheAdapter = createTrancheAdapterInMemory
} else if (dataSource === 'jsonServer') {
  createItemAdapter = createItemAdapterJsonServer
  createOrderAdapter = createOrderAdapterJsonServer
  createTrancheAdapter = createTrancheAdapterInMemory // to be replaced by createTrancheAdapterJsonServer
} else {
  throw new Error('Adapters Database index : Invalid storage type')
}

export { createItemAdapter, createOrderAdapter, createTrancheAdapter }
