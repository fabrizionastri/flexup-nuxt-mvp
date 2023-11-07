import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetByProperties {
  <T extends Entity>(
    entityName: EntityName
  ): (
    property1: keyof T,
    value1: unknown,
    property2: keyof T,
    value2: unknown,
    andOr?: 'and' | 'or'
  ) => Promise<T[]>
}
