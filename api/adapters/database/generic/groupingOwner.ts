import type { GroupingAccountData } from 'lib/entities'
import { createGetById, createGetBySelectedProperty } from './methods'

export const groupingOwnerAdapter = {
  getById: createGetById<GroupingAccountData>('groupingOwner'),
  getByAccountId: createGetBySelectedProperty<GroupingAccountData>('groupingOwner', 'accountId')
  // getById: adapterMethods.createGetById(groupingOwners),
  // getByAccountId: adapterMethods.createGetBySelectedProperty(groupingOwners, 'accountId')
}
