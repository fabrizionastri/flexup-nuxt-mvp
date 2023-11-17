import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetByProperties } from '../../generic/interfaces'

export const createGetByProperties: CreateGetByProperties =
  <T extends Entity>(entityName: EntityName) =>
  (
    property1: keyof T & string,
    value1: unknown,
    property2: keyof T & string,
    value2: unknown,
    andOr: 'and' | 'or' = 'and'
  ): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    // Check if the entity exists in the database
    if (entities.length === 0) throw new Error(`No data found in database for "${entityName}"`)

    // Check if the properties exists for this entity - should not be needed in production
    if (!(property1 in entities[0])) {
      throw new Error(`Property "${property1}" does not exist on "${entityName}"`)
    }
    if (!(property2 in entities[0])) {
      throw new Error(`Property "${property2}" does not exist on "${entityName}"`)
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
