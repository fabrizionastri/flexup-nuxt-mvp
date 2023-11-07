import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetBySelectedProperties {
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T,
    property2: keyof T,
    andOr?: 'and' | 'or'
  ): (value1: unknown, value2: unknown) => Promise<T[]>
}
