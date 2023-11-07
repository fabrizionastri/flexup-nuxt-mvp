import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetBySelectedProperty {
  <T extends Entity>(
    entityName: EntityName,
    property: keyof T & string
  ): (value: unknown) => Promise<T[]>
}
