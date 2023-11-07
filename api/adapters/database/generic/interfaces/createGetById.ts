import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetById {
  <T extends Entity>(entityName: EntityName): (id: string) => Promise<T | undefined>
}
