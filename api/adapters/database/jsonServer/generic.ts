import { GenericAdapter } from '../interfaces'
import { Entity, EntityName } from 'entities/_generic'
import axios from './myAxios'

export const createGenericAdapter = <T extends Entity>(entity: EntityName): GenericAdapter<T> => {
  return {
    getById: async (entityId: string): Promise<T | undefined> => {
      // console.log('createGenericAdapter.ts - entity:', entity)
      // console.log(
      //   'createGenericAdapter.ts - encodeURIComponent(entityId):',
      //   encodeURIComponent(entityId)
      // )
      const result = await axios.get<T>(
        `/${encodeURIComponent(entity)}/${encodeURIComponent(entityId)}`
      )
      // console.log('createGenericAdapter.ts / result', result)
      return result
    },
    getByProperty: async (property: string, value: unknown): Promise<T[]> => {
      const encodedEntity = encodeURIComponent(entity)
      const encodedProperty = encodeURIComponent(property)
      const encodedValue = encodeURIComponent(value as string) // Assuming value can be safely casted to string
      const result =
        (await axios.get<T[]>(`/${encodedEntity}?${encodedProperty}=${encodedValue}`)) ?? []
      return result
    }
  }
}
