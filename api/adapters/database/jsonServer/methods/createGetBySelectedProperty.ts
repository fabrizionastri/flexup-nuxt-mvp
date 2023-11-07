import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetBySelectedProperty } from '../../generic/interfaces'

export const createGetBySelectedProperty: CreateGetBySelectedProperty =
  <T extends Entity>(entity: EntityName, property: keyof T & string) =>
  async (value: unknown): Promise<T[]> => {
    const encodedValue = encodeURIComponent(value as string) // Assuming value can be safely casted to string
    const result = (await axios.get<T[]>(`/${entity}?${property}=${encodedValue}`)) ?? []
    return convertStringsToDates(result)
  }
