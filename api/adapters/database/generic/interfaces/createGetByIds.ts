import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetByIds {
  <T extends Entity>(entityName: EntityName): (ids: string[]) => Promise<T[]>
}
