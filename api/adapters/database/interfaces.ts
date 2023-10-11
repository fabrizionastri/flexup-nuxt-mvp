import { ItemData, OrderData, TrancheData } from 'entities/'

export interface ItemAdapter {
  getById: (id: string) => Promise<ItemData | undefined>
  getByOrderId: (orderId: string) => Promise<ItemData[]>
}

export interface OrderAdapter {
  getAll: () => Promise<OrderData[]>
  getById: (orderId: string) => Promise<OrderData | undefined>
}

export interface TrancheAdapter {
  // getById: (id: string, orderId: string) => Promise<TrancheData | undefined>
  getByOrderId: (orderId: string) => Promise<TrancheData[]>
}
