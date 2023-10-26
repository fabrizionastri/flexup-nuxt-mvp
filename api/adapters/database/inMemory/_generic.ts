import type { GenericAdapter } from '../interfaces'
import type { Entity, EntityName } from 'entities/_generic'
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

  const getByProperties = (
    property1: string,
    value1: unknown,
    property2: string,
    value2: unknown,
    andOr: 'and' | 'or' = 'and'
  ): Promise<T[]> => {
    // Check if the property exists on the first entity in the list
    if (entities.length === 0)
      return Promise.reject(new Error(`No data found in database for "${entity}"`))
    if (!(property1 in entities[0])) {
      return Promise.reject(
        new Error(`Property "${property1}" does not exist on entity "${entity}"`)
      )
    }
    if (!(property2 in entities[0])) {
      return Promise.reject(
        new Error(`Property "${property2}" does not exist on entity "${entity}"`)
      )
    }
    if (andOr === 'and') {
      return Promise.resolve(
        entities.filter(
          (entity: Entity) => entity[property1] === value1 && entity[property2] === value2
        )
      )
    } else {
      return Promise.resolve(
        entities.filter(
          (entity: Entity) => entity[property1] === value1 || entity[property2] === value2
        )
      )
    }
  }

  return {
    getById,
    getByProperty,
    getByProperties
  }
}
