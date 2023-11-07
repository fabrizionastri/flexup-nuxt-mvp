import type { GroupingAccountData } from 'lib/entities'
import { createGetById, createGetBySelectedProperty } from './methods'

export const groupingAccountAdapter = {
  getById: createGetById<GroupingAccountData>('groupingAccount'),
  getByAccountId: createGetBySelectedProperty<GroupingAccountData>('groupingAccount', 'accountId')
  // getById: adapterMethods.createGetById(groupingAccounts),
  // getByAccountId: adapterMethods.createGetBySelectedProperty(groupingAccounts, 'accountId')
}
