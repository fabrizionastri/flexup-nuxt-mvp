import { Entity } from 'entities/_generic'
import { createGetBySelectedProperty } from '.'

export const createGetOneBySelectedProperty =
  <T extends Entity>(entities: T[], property: keyof T) =>
  async (value: unknown): Promise<T | undefined> => {
    const results = await createGetBySelectedProperty(entities, property)(value)
    return results[0]
  }
