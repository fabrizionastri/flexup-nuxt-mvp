import type { TrancheData } from 'lib/entities'
import { createGetById, createGetBySelectedProperty, createGetByProperty } from './methods'

export const trancheAdapter = {
  getById: createGetById<TrancheData>('tranche'),
  getByOrderId: createGetBySelectedProperty<TrancheData>('tranche', 'orderId'),
  getByProperty: createGetByProperty<TrancheData>('tranche')
}
