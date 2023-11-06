import type { IndividualData } from 'lib/entities'
import { createGetById, createGetOneBySelectedProperty } from './methods'

export const individualAdapter = {
  getById: createGetById<IndividualData>('individual'),
  getByUserId: createGetOneBySelectedProperty<IndividualData>('individual', 'userId')
  // getByProperty: adapterMethods.createGetByProperty(individuals),
}
