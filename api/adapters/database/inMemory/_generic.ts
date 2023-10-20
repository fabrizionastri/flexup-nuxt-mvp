import { GenericAdapter } from '../interfaces'
import { Entity, EntityName } from 'entities/_generic'
import { inMemory } from 'mock/inMemory'

export const createGenericAdapter = <T extends Entity>(entity: EntityName): GenericAdapter<T> => {
  const entities: T[] = inMemory[entity] as unknown as T[]

  const getById = (entityId: string): Promise<T | undefined> =>
    Promise.resolve(entities.find((entity: Entity) => entity.id === entityId))

  const getByProperty = (property: string, value: unknown): Promise<T[]> => {
    // Check if the property exists on the first entity in the list
    if (entities.length > 0 && !(property in entities[0])) {
      return Promise.reject(
        new Error(`Property "${property}" does not exist on entity "${entity}"`)
      )
    }
    return Promise.resolve(entities.filter((entity: Entity) => entity[property] === value))
  }

  return {
    getById,
    getByProperty
  }
}