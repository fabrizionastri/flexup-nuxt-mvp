import {
  createItemAdapter,
  createOrderAdapter,
  createTrancheAdapter
} from 'adapters/database/index'
import { Order } from 'entities/order'
import { createOrderGateway } from 'gateways/orderGateway'
import { config } from 'dotenv'
config() // load variables from .env into process.env

export const getAllOrdersForAccountId = async (accountId: string): Promise<Order[]> => {
  // export const getAllOrdersForAccountId = async (accountId: string): Promise<any[]> => {
  // console.log(
  //   'Core : getAllOrdersForAccountId → process.env.STORAGE_TYPE',
  //   // process.env.STORAGE_TYPE
  //   process.env.NODE_ENV
  // )

  const orderGateway = createOrderGateway(
    createOrderAdapter(accountId),
    createItemAdapter(),
    createTrancheAdapter()
  )
  return await orderGateway.getAll()
}
