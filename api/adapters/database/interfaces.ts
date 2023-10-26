import type { ItemData, Order, TrancheData } from 'entities/'
import type { Entity } from 'entities/_generic'

export interface GenericAdapter<T extends Entity> {
  getById: (id: string) => Promise<T | undefined>
  getByProperty: (property: string, value: unknown) => Promise<T[]>
  getByProperties: (
    property1: string,
    value1: unknown,
    property2: string,
    value2: unknown,
    andOr: 'and' | 'or'
  ) => Promise<T[]>
}

export interface ItemAdapter {
  getById: (id: string) => Promise<ItemData | undefined>
  getByOrderId: (orderId: string) => Promise<ItemData[]>
  getByProperty: (property: keyof ItemData, value: unknown) => Promise<ItemData[]>
}

export interface OrderAdapter {
  getAll: () => Promise<Order[]> // results will always be filtered by accountId (client or supplier), but this accountId is provided in the factory function which creates the adapter, not as a parameter of the getAll method
  getById: (orderId: string) => Promise<Order | undefined>
  getByProperty: (property: keyof Order, value: unknown) => Promise<Order[]>
}

export interface TrancheAdapter {
  // getById: (id: string, orderId: string) => Promise<TrancheData | undefined>
  getByOrderId: (orderId: string) => Promise<TrancheData[]>
}
