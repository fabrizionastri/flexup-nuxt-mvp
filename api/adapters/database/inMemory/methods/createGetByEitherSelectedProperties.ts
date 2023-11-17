import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetByEitherSelectedProperties } from '../../generic/interfaces'

export const createGetByEitherSelectedProperties: CreateGetByEitherSelectedProperties =
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T & string,
    property2: keyof T & string
  ) =>
  (value: unknown): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    // Check if the entity exists in the database
    if (entities.length === 0) throw new Error(`No data found in database for "${entityName}"`)
    // console.log(
    //   'adapters/database/inMemory/methods/createGetByEitherSelectedProperties - entities:',
    //   entities
    // )

    // Check if the properties exists for this entity - should not be needed in production
    if (!(property1 in entities[0])) {
      throw new Error(`Property "${property1}" does not exist on "${entityName}"`)
    }
    if (!(property2 in entities[0])) {
      throw new Error(`Property "${property2}" does not exist on "${entityName}"`)
    }

    return Promise.resolve(
      entities.filter(
        (entity: Entity) => entity[property1] === value || entity[property2] === value
      )
    )
  }
