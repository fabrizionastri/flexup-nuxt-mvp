import type { Order } from 'entities/order'
import { createOrderGateway } from '../gateways'

export const getOrders = async (accountId: string): Promise<Order[]> => {
  const orderGateway = createOrderGateway(accountId)
  return await orderGateway.getAll()
}
