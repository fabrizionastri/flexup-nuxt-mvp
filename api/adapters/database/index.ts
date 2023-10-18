import { config } from 'dotenv'

import {
  createItemAdapterInMemory,
  createOrderAdapterInMemory,
  createTrancheAdapterInMemory
} from './inMemory'
import { createItemAdapterJsonServer } from './jsonServer/itemAdapterJsonServer'
import { createOrderAdapterJsonServer } from './jsonServer/orderAdapterJsonServer'

config()

const dataSource: string = process.env.STORAGE_TYPE || 'InMemory'
// const dataSource: string = 'jsonServer'

console.log('Adapters data source:', dataSource)

let createItemAdapter: any
let createOrderAdapter: any
let createTrancheAdapter: any

switch (dataSource) {
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
