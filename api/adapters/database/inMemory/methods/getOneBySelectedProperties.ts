import { Entity } from 'entities/_generic'
import { createGetBySelectedProperties } from '.'

export const createGetOneBySelectedProperties =
  <T extends Entity>(
    entities: T[],
    property1: string,
    property2: string,
    andOr: 'and' | 'or' = 'and'
  ) =>
  async (value1: unknown, value2: unknown): Promise<T | undefined> => {
    const results = await createGetBySelectedProperties(
      entities,
      property1,
      property2,
      andOr
    )(value1, value2)
    return results[0]
  }
