import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetOneByProperty {
  <T extends Entity>(
    entityName: EntityName
  ): (property: keyof T, value: unknown) => Promise<T | undefined>
}
