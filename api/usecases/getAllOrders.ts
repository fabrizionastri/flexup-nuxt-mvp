import { Order } from 'entities/order'
import { createOrderGateway } from 'gateways/orderGateway'

export const getAllOrders = async (accountId: string): Promise<Order[]> => {
  const orderGateway = createOrderGateway(accountId)
  return await orderGateway.getAll()
}
