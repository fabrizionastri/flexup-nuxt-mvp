import { itemAdapter, createOrderAdapter, trancheAdapter } from './inMemory'
import { createItemAdapter } from './jsonServer/item'
import { createOrderAdapter } from './jsonServer/order'

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
  itemAdapter = itemAdapter
  createOrderAdapter = createOrderAdapter
  trancheAdapter = irancheAdapter // to be replaced by createTrancheAdapter
} else {
  throw new Error('Adapters Database index : Invalid storage type')
}

export { itemAdapter, createOrderAdapter, trancheAdapter }
