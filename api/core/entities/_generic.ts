export interface Entity {
  id: string
}

export interface Entity {
  id: string
}

export interface EntityGateway<T extends Entity> {
  getEntityById: (id: string) => Promise<T | undefined>
  getAllEntities: () => Promise<T[]>
}

export function getEntities<T extends Entity>(
  gateway: EntityGateway<T>
): Promise<T[]> {
  return gateway.getAllEntities()
}
