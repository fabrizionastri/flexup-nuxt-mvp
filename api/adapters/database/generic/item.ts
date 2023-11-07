import { createGetById, createGetBySelectedProperty, createGetByProperty } from './methods'
import type { ItemData } from 'entities/item'

export const itemAdapter = {
  getById: createGetById<ItemData>('item'),
  getByOrderId: createGetBySelectedProperty<ItemData>('item', 'orderId'),
  getByProperty: createGetByProperty<ItemData>('item')
}
