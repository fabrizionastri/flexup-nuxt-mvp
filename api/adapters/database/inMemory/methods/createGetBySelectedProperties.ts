import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetBySelectedProperties } from '../../generic/interfaces'

export const createGetBySelectedProperties: CreateGetBySelectedProperties =
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T & string,
    property2: keyof T & string,
    andOr: 'and' | 'or' = 'and'
  ) =>
  async (value1: unknown, value2: unknown): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    // Check if the property exists on the first entity in the list
    if (entities.length === 0) throw new Error(`No data found in database for this entity`)
    if (!(property1 in entities[0])) {
      throw new Error(`Property "${property1}" does not exist on this entity"`)
    }
    if (!(property2 in entities[0])) {
      throw new Error(`Property "${property2}" does not exist on this entity`)
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
