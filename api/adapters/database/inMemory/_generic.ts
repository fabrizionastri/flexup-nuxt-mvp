import { Entity } from 'entities/_generic'

export const createGetById =
  <T extends Entity>(entities: T[]) =>
  (entityId: string): Promise<T | undefined> =>
    Promise.resolve(entities.find((entity) => entity.id === entityId))

export const createGetByProperty =
  <T extends Entity>(entities: T[]) =>
  (property: keyof T, value: unknown): Promise<T[]> => {
    // Check if the property exists on the first entity in the list
    if (entities.length > 0 && !(property in entities[0])) {
      return Promise.reject(
        new Error(`Property "${String(property)}" does not exist on this entity`)
      )
    }
    return Promise.resolve(entities.filter((entity: Entity) => entity[String(property)] === value))
  }

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

export const createGetByProperties =
  <T extends Entity>(entities: T[]) =>
  (
    property1: string,
    value1: unknown,
    property2: string,
    value2: unknown,
    andOr: 'and' | 'or' = 'and'
  ): Promise<T[]> => {
    // Check if the property exists on the first entity in the list
    if (entities.length === 0)
      return Promise.reject(new Error(`No data found in database for this entity`))
    if (!(property1 in entities[0])) {
      return Promise.reject(new Error(`Property "${property1}" does not exist on this entity"`))
    }
    if (!(property2 in entities[0])) {
      return Promise.reject(new Error(`Property "${property2}" does not exist on this entity`))
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
