import inMemory from 'mock/inMemory'

import adapterMethods from './_source'
// import type { AccountUserData } from '~/lib/entities'

const accountusers = inMemory.accountUser

// This is probably useless, as only have 1 generic adapter for accountUser
// export interface AccountUserAdapter {
//   getById: (id: string) => Promise<AccountUserData[]> // results will always be filtered by accountId (client or supplier), but this accountId is provided in the factory function which creates the adapter, not as a parameter of the getAll method
//   getByUserId: (userId: string) => Promise<AccountUserData[]>
//   getByProperty: (property: keyof AccountUserData, value: unknown) => Promise<AccountUserData[]>
//   isUserMemberOfAccount: (userId: string, accountId: string) => Promise<boolean>
// }

export const accountUserAdapter /* : AccountUserAdapter */ = {
  // getById: adapterMethods.createGetById(accountusers),
  getByUserId: adapterMethods.createGetBySelectedProperty(accountusers, 'userId'),
  getByProperty: adapterMethods.createGetByProperty(accountusers),
  isUserMemberOfAccount: adapterMethods.isUserMemberOfAccount
}
