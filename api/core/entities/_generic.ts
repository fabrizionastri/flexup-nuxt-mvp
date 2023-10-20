export interface Entity {
  id: string
  [key: string]: unknown
}

export type EntityName =
  | 'account'
  | 'accountUser'
  | 'currency'
  | 'item'
  | 'order'
  | 'tranche'
  | 'user'

export interface EntityGateway<T extends Entity> {
  getEntityById: (id: string) => Promise<T | undefined>
  getAllEntities: () => Promise<T[]>
}

export function getEntities<T extends Entity>(gateway: EntityGateway<T>): Promise<T[]> {
  return gateway.getAllEntities()
}
