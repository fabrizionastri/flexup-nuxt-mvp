// api/adapters/database/generic/user.ts
import type { UserData } from 'lib/entities'
import { createGetById, createGetByProperty } from './methods'

export const userAdapter = {
  getById: createGetById<UserData>('user'),
  getByProperty: createGetByProperty<UserData>('user')
}
