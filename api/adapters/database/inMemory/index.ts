import { createGenericAdapter } from './generic'

export * from './_generic'
export * from './generic'
export * from './individual'
export * from './item'
export * from './order'
export * from './tranche'
export * from './account'

export const accountUserAdapter = createGenericAdapter('accountUser')
export const identifierAdapter = createGenericAdapter('identifier')
export const groupingAccountAdapter = createGenericAdapter('groupingAccount')
export const groupingAdapter = createGenericAdapter('grouping')
export const userAdapter = createGenericAdapter('user')
