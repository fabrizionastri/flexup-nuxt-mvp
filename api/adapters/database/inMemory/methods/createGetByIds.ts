import type { Entity, EntityName } from 'entities/entity'
import inMemory from 'mock/inMemory'
import type { CreateGetByIds } from '../../generic/interfaces'

export const createGetByIds: CreateGetByIds =
  <T extends Entity>(entityName: EntityName) =>
  async (ids: string[]): Promise<T[]> => {
    const entities = inMemory[entityName] as unknown as T[]
    return Promise.resolve(entities.filter((entity) => ids.includes(entity['id'])))
  }
