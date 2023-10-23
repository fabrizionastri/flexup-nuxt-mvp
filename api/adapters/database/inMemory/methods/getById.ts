import { Entity } from 'entities/_generic'

export const createGetById =
  <T extends Entity>(entities: T[]) =>
  (entityId: string): Promise<T | undefined> =>
    Promise.resolve(entities.find((entity) => entity.id === entityId))
