import type { Entity, EntityName } from 'entities/entity'
import { createGetBySelectedProperties } from '.'
import type { CreateGetOneBySelectedProperties } from '../../generic/methods/interfaces'

export const createGetOneBySelectedProperties: CreateGetOneBySelectedProperties =
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T,
    property2: keyof T,
    andOr: 'and' | 'or' = 'and'
  ) =>
  async (value1: unknown, value2: unknown): Promise<T | undefined> => {
    const results = (await createGetBySelectedProperties(
      entityName,
      property1,
      property2,
      andOr
    )(value1, value2)) as T[]
    return !results || results.length === 0 ? undefined : results[0]
  }
