import { Item, ItemData } from 'entities/item'
import { Order, OrderData } from 'entities/order'

export interface ItemGateway {
  getAllData: () => ItemData[]
  getByIdData: (itemId: string) => ItemData | undefined
  getByOrderIdData: (orderId: string) => ItemData[]
  getAll: () => Item[]
  getById: (itemId: string) => Item | undefined
  getByOrderId: (orderId: string) => Item[]
}

export interface OrderGateway {
  getAllData: () => OrderData[]
  getByIdData: (orderId: string) => OrderData | undefined
  getAll: () => Order[]
  getById: (orderId: string) => Order | undefined
}
