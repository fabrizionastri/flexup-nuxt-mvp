import { ItemData } from 'entities/item'
import { OrderData } from 'entities/order'

export interface ItemAdapter {
  getById: (id: string) => Promise<ItemData | undefined>
  getByOrderId: (orderId: string) => Promise<ItemData[]>
  getByOrderIds: (orderIds: string[]) => Promise<ItemData[]>
}

export interface OrderAdapter {
  getAll: () => Promise<OrderData[]>
  getById: (orderId: string) => Promise<OrderData | undefined>
}
