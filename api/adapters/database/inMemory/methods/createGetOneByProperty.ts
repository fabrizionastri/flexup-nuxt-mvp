import type { Entity, EntityName } from 'entities/entity'
import { createGetByProperty } from '.'
import type { CreateGetOneByProperty } from '../../generic/interfaces'

export const createGetOneByProperty: CreateGetOneByProperty =
  <T extends Entity>(entityName: EntityName) =>
  async (property: keyof T & string, value: unknown): Promise<T | undefined> => {
    const results = (await createGetByProperty(entityName)(property, value)) as T[]
    return !results || results.length === 0 ? undefined : results[0]
  }
