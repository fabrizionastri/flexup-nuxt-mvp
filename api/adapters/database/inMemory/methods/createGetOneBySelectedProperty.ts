import type { Entity, EntityName } from 'entities/entity'
import { createGetBySelectedProperty } from '.'
import type { CreateGetOneBySelectedProperty } from '../../generic/interfaces'

export const createGetOneBySelectedProperty: CreateGetOneBySelectedProperty =
  <T extends Entity>(entityName: EntityName, property: keyof T & string) =>
  async (value: unknown): Promise<T | undefined> => {
    const results = (await createGetBySelectedProperty(entityName, property)(value)) as T[]
    return !results || results.length === 0 ? undefined : results[0]
  }
