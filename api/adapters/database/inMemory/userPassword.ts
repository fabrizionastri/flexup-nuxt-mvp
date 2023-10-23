/*
// Option 1 - using toolit

// --- inMemory/lib/checkPassword.ts
import { userPasswordDatas } from 'mock/inMemory/userPassword'
import { Entity } from 'entities'

export const createCheckPassword =
<T extends Entity>(entities: T[]) =>
(userId: string, password: string): Promise<boolean> =>
Promise.resolve(!!entities.find((entity) => entity.id === `${userId}:${password}`))


// --- inMemory/userPassword.ts
import { createCheckPassword } from './checkPassword'

export const userPasswordAdapter = {
  checkPassword: createCheckPassword(userPasswordDatas)
}

*/

// Option 2 - hard coded

import { userPasswordDatas } from 'mock/inMemory'

export const userPasswordAdapter = {
  checkPassword: (userId: string, password: string): Promise<boolean> =>
    Promise.resolve(!!userPasswordDatas.find((pwd) => pwd.id === `${userId}:${password}`))
}
