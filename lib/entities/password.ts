import type { Entity } from '.'

export interface UserPasswordData extends Entity {
  id: string // userId
  password: string
}

