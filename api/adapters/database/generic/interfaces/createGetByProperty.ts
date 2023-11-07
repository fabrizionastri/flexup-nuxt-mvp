import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetByProperty {
  <T extends Entity>(
    entityName: EntityName
  ): (property: keyof T & string, value: unknown) => Promise<T[]>
}
