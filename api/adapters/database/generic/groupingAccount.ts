import { createGetById, createGetBySelectedProperty } from './methods'

export const groupingAccountAdapter = {
  getById: createGetById('groupingAccount'),
  getByAccountId: createGetBySelectedProperty('groupingAccount', 'accountId')
  // getById: adapterMethods.createGetById(groupingAccounts),
  // getByAccountId: adapterMethods.createGetBySelectedProperty(groupingAccounts, 'accountId')
}
