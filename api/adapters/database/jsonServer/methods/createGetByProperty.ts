import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetByProperty } from '../../generic/interfaces'
import { assertPropertyExists } from './assertPropertyExists'

export const createGetByProperty: CreateGetByProperty =
  <T extends Entity>(entityName: EntityName) =>
  async (property: keyof T & string, value: unknown): Promise<T[]> => {
    const encodedValue = encodeURIComponent(value as string)

    // Should not be necessary, only for tests & development
    await assertPropertyExists(entityName, property)

    const result = (await axios.get<T[]>(`/${entityName}?${property}=${encodedValue}`)) ?? []
    return convertStringsToDates(result)
  }
