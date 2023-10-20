import inMemory from 'mock/inMemory'

export interface Entity {
  id: string
  [key: string]: unknown
}

// entity names are the keys of the inMemory object
export type EntityName = keyof typeof inMemory

export interface EntityGateway<T extends Entity> {
  getEntityById: (id: string) => Promise<T | undefined>
  getAllEntities: () => Promise<T[]>
}

export function getEntities<T extends Entity>(gateway: EntityGateway<T>): Promise<T[]> {
  return gateway.getAllEntities()
}
