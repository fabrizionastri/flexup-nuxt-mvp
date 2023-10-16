import { CustomAdapter } from '../interfaces'
import { Entity, EntityKey } from 'entities/_generic'
import axios from './myAxios'

export const createCustomAdapterJsonServer = <T extends Entity>(
  entity: EntityKey
): CustomAdapter<T> => {
  return {
    getById: async (entityId: string): Promise<T | undefined> => {
      console.log('createCustomAdapterJsonServer.ts - entity:', entity)
      console.log(
        'createCustomAdapterJsonServer.ts - encodeURIComponent(entityId):',
        encodeURIComponent(entityId)
      )
      const result = await axios.get<T>(
        `/${encodeURIComponent(entity)}/${encodeURIComponent(entityId)}`
      )
      // console.log('createCustomAdapterJsonServer.ts / result', result)
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
