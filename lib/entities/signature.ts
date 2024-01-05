import type { Entity } from '.'

export interface SignatureData extends Entity {
  id: string
  date: Date
  accountId: string
  userId: string
}
