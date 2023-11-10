import type { Entity, EntityName } from 'entities/entity'
import { createGetBySelectedProperty } from '.'
import type { CreateGetOneBySelectedProperty } from '../../generic/interfaces'
import { assertPropertyExists } from './assertPropertyExists'

export const createGetOneBySelectedProperty: CreateGetOneBySelectedProperty =
  <T extends Entity>(entityName: EntityName, property: keyof T & string) =>
  async (value: unknown): Promise<T | undefined> => {
    // Should not be necessary, only for tests & development
    await assertPropertyExists(entityName, property)

    const results = (await createGetBySelectedProperty(entityName, property)(value)) as T[]
    return !results || results.length === 0 ? undefined : results[0]
  }
