import { ItemData, OrderData, TrancheData } from 'entities/'
import { Entity } from 'entities/_generic'

export interface CustomAdapter<T extends Entity> {
  getById: (id: string) => Promise<T | undefined>
  getByProperty: (property: string, value: unknown) => Promise<T[]>
}

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
