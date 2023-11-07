import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetByProperty } from '../../generic/interfaces'

export const createGetByProperty: CreateGetByProperty =
  <T extends Entity>(entityName: EntityName) =>
  async (property1: keyof T & string, value1: unknown): Promise<T[]> => {
    const encodedValue = encodeURIComponent(value1 as string)
    const result = (await axios.get<T[]>(`/${entityName}?${property1}=${encodedValue}`)) ?? []
    return convertStringsToDates(result)
  }
