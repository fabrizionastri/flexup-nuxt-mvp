import type { GenericAdapter } from '../interfaces'
import type { Entity, EntityName } from 'entities/_generic'
import axios from './myAxios'

export const createGenericAdapter = <T extends Entity>(entity: EntityName): GenericAdapter<T> => ({
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
  },
  getByProperties: async (
    property1: string,
    value1: unknown,
    property2: string,
    value2: unknown,
    andOr: 'and' | 'or' = 'and'
  ): Promise<T[]> => {
    const encodedEntity = encodeURIComponent(entity)
    const encodedProperty1 = encodeURIComponent(property1)
    const encodedValue1 = encodeURIComponent(value1 as string) // Assuming value can be safely casted to string
    const encodedProperty2 = encodeURIComponent(property2)
    const encodedValue2 = encodeURIComponent(value2 as string) // Assuming value can be safely casted to string
    if (andOr !== 'and' && andOr !== 'or') throw new Error('Invalid andOr parameter')
    let result: T[]
    if (andOr === 'and') {
      result =
        (await axios.get<T[]>(
          `/${encodedEntity}?${encodedProperty1}=${encodedValue1}&${encodedProperty2}=${encodedValue2}`
        )) ?? []
      // console.log('generic.ts - result:', result)
    } else {
      const result1: T[] =
        (await axios.get<T[]>(`/${encodedEntity}?${encodedProperty1}=${encodedValue1}`)) ?? []
      // console.log('generic.ts - result1:', result1)
      const result2: T[] =
        (await axios.get<T[]>(`/${encodedEntity}?${encodedProperty2}=${encodedValue2}`)) ?? []
      // console.log('generic.ts - result2:', result2)
      result = [...result1, ...result2]
    }

    return result
  }
})
