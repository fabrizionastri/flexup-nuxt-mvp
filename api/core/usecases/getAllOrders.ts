import {
  createItemAdapter,
  createOrderAdapter,
  createTrancheAdapter
} from 'adapters/database/index'
import { Order } from 'entities/order'
import { createOrderGateway } from 'gateways/orderGateway'
import { config } from 'dotenv'
config() // load variables from .env into process.env

export const getAllOrders = async (accountId: string): Promise<Order[]> => {
  const orderGateway = createOrderGateway(accountId)

  return await orderGateway.getAll()
}
