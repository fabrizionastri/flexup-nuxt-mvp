import { itemAdapter, createOrderAdapter, trancheAdapter } from './inMemory'
import { createItemAdapterJsonServer } from './jsonServer/item'
import { createOrderAdapterJsonServer } from './jsonServer/order'

import { config } from 'dotenv'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'InMemory'
// const dataSource: string = 'jsonServer'

console.log('Adapters data source:', dataSource)

let itemAdapter: any
let createOrderAdapter: any
let trancheAdapter: any

if (dataSource === 'inMemory') {
  itemAdapter = itemAdapter
  createOrderAdapter = createOrderAdapter
  trancheAdapter = trancheAdapter
} else if (dataSource === 'jsonServer') {
  itemAdapter = itemAdapterJsonServer
  createOrderAdapter = createOrderAdapterJsonServer
  trancheAdapter = irancheAdapterJsonServer // to be replaced by createTrancheAdapterJsonServer
} else {
  throw new Error('Adapters Database index : Invalid storage type')
}

export { itemAdapter, createOrderAdapter, trancheAdapter }
