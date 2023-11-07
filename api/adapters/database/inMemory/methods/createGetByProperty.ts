import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetByProperty } from '../../generic/interfaces'

export const createGetByProperty: CreateGetByProperty =
  <T extends Entity>(entityName: EntityName) =>
  async (property: keyof T, value: unknown): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    // Check if the property exists on the first entity in the list
    if (entities.length > 0 && !(property in entities[0])) {
      throw new Error(`Property "${String(property)}" does not exist on this entity`)
    }
    return Promise.resolve(entities.filter((entity) => entity[String(property)] == value))
  }
