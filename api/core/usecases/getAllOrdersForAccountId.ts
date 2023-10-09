import { createItemAdapter, createOrderAdapter } from 'adapters/database/index'
import { config } from 'dotenv'
import { Order } from 'entities/order'
import { createOrderGateway } from 'gateways/orderGateway'
config() // load variables from .env into process.env

export const getAllOrdersForAccountId = async (accountId: string): Promise<Order[]> => {
  console.log(
    'Core : getAllOrdersForAccountId → process.env.STORAGE_TYPE',
    process.env.STORAGE_TYPE
  )
  const orderGateway = createOrderGateway(createOrderAdapter(accountId), createItemAdapter())
  const orders = await orderGateway.getAll()
  return orders
}
