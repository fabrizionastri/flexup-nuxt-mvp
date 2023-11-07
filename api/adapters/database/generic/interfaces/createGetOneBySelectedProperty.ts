import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetOneBySelectedProperty {
  <T extends Entity>(
    entityName: EntityName,
    property: keyof T
  ): (value: unknown) => Promise<T | undefined>
}
