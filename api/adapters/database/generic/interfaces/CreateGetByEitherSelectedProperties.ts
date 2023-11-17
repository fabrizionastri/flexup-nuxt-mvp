import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetByEitherSelectedProperties {
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T & string,
    property2: keyof T & string
  ): (value: unknown) => Promise<T[]>
}
