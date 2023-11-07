import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetById } from '../../generic/interfaces'

export const createGetById: CreateGetById =
  <T extends Entity>(entityName: EntityName) =>
  // TOCHECK: is the async necessary?
  async (id: string): Promise<T | undefined> => {
    const entities = inMemory[entityName] as unknown as T[]
    return Promise.resolve(entities.find((entity) => entity.id === id))
  }
