import { CustomAdapter } from '../interfaces'
import { Entity, EntityKey } from 'entities/_generic'
import { inMemory } from 'mock/inMemory'

export const createCustomAdapterInMemory = <T extends Entity>(
  entity: EntityKey
): CustomAdapter<T> => {
  const entities: T[] = [...(inMemory[entity] as unknown as T[])]

  const getById = (entityId: string): Promise<T | undefined> =>
    Promise.resolve(entities.find((entity: Entity) => entity.id === entityId))

  const getByProperty = (property: string, value: unknown): Promise<T[]> =>
    Promise.resolve(entities.filter((entity: Entity) => entity[property] === value))

  return {
    getById,
    getByProperty
  }
}
