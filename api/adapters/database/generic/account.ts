import inMemory from 'mock/inMemory'
import adapterMethods from './_source'
// import type { AccountData } from 'lib/entities'

const accounts = inMemory.account

export const accountAdapter = {
  // TOCHECK: n'y a-t-il pas un moyen de typer la fonction ?
  // getById: adapterMethods.createGetById<AccountData>(accounts: AccountData[]),
  getById: adapterMethods.createGetById(accounts),
  getByProperty: adapterMethods.createGetByProperty(accounts)
}
