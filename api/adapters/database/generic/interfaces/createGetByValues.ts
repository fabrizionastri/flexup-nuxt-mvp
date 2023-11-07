import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetByValues {
  <T extends Entity>(entityName: EntityName): (property: keyof T, values: unknown[]) => Promise<T[]>
}
