import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetByProperty } from '../../generic/interfaces'

export const createGetByProperty: CreateGetByProperty =
  <T extends Entity>(entityName: EntityName) =>
  async (property: keyof T, value: unknown): Promise<T[]> => {
    const encodedEntity = encodeURIComponent(entityName)
    const encodedProperty = encodeURIComponent(property as string)
    const encodedValue = encodeURIComponent(value as string) // Assuming value can be safely casted to string
    return (await axios.get<T[]>(`/${encodedEntity}?${encodedProperty}=${encodedValue}`)) ?? []
  }
