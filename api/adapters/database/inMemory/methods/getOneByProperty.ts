import type { Entity } from 'entities/_generic'
import { createGetByProperty } from '.'

export const createGetOneByProperty =
  <T extends Entity>(entities: T[]) =>
  async (property: keyof T, value: unknown): Promise<T | undefined> => {
    const results = await createGetByProperty(entities)(property, value)
    return results[0]
  }
