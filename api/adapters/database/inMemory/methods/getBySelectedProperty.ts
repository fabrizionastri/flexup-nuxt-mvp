import type { Entity } from 'entities/_generic'

export const createGetBySelectedProperty =
  <T extends Entity>(entities: T[], property: keyof T) =>
  (value: unknown): Promise<T[]> => {
    // Check if the property exists on the first entity in the list
    if (entities.length > 0 && !(property in entities[0])) {
      return Promise.reject(
        new Error(`Property "${String(property)}" does not exist on this entity`)
      )
    }
    return Promise.resolve(entities.filter((entity: Entity) => entity[String(property)] === value))
  }
