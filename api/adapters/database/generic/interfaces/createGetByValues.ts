import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetByValues {
  <T extends Entity>(
    entityName: EntityName
  ): (property: keyof T & string, values: unknown[]) => Promise<T[]>
}
