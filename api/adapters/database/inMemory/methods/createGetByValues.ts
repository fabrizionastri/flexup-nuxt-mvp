import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetByValues } from '../../generic/interfaces'

export const createGetByValues: CreateGetByValues =
  <T extends Entity>(entityName: EntityName) =>
  async (property: keyof T & string, values: unknown[]): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    return Promise.resolve(entities.filter((entity) => values.includes(entity[property])))
  }
