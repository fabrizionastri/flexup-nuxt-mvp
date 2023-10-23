import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const groupingAccounts = inMemory.groupingAccount

export const groupingAccountAdapter = {
  getById: adapterMethods.createGetById(groupingAccounts),
  getByAccountId: adapterMethods.createGetBySelectedProperty(groupingAccounts, 'accountId')
}
