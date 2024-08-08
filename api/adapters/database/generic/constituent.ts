import type { ConstituentData } from 'lib/entities'
import { createGetById, createGetBySelectedProperty } from './methods'

export const constituentAdapter = {
  getById: createGetById<ConstituentData>('constituent'),
  getByAccountId: createGetBySelectedProperty<ConstituentData>('constituent', 'accountId')
  // getById: adapterMethods.createGetById(constituents),
  // getByAccountId: adapterMethods.createGetBySelectedProperty(constituents, 'accountId')
}
