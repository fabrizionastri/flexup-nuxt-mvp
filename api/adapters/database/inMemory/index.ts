import { createGenericAdapter } from './generic'

export * from './generic'
export * from './item'
export * from './order'
export * from './tranche'

export const accountAdapter = createGenericAdapter('account')
export const accountUserAdapter = createGenericAdapter('accountUser')
export const credentialAdapter = createGenericAdapter('credential')
export const groupingAdapter = createGenericAdapter('grouping')
export const groupingAccountAdapter = createGenericAdapter('groupingAccount')
export const userAdapter = createGenericAdapter('user')
