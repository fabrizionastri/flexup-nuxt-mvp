import type { Entity, EntityName } from 'entities/_generic'
import axios from '../myAxios'

export const createGetByProperty =
  <T extends Entity>(entity: EntityName) =>
  async (property: keyof T, value: unknown): Promise<T[]> => {
    const encodedEntity = encodeURIComponent(entity)
    const encodedProperty = encodeURIComponent(property as string)
    const encodedValue = encodeURIComponent(value as string) // Assuming value can be safely casted to string
    const result =
      (await axios.get<T[]>(`/${encodedEntity}?${encodedProperty}=${encodedValue}`)) ?? []
    return result
  }