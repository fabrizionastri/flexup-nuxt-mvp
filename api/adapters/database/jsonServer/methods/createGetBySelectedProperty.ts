import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetBySelectedProperty } from '../../generic/interfaces'
import { assertPropertyExists } from './assertPropertyExists'

export const createGetBySelectedProperty: CreateGetBySelectedProperty =
  <T extends Entity>(entityName: EntityName, property: keyof T & string) =>
  async (value: unknown): Promise<T[]> => {
    const encodedValue = encodeURIComponent(value as string) // Assuming value can be safely casted to string

    // Should not be necessary, only for tests & development
    await assertPropertyExists(entityName, property)

    // console.log(`/${entityName}?${property}=${encodedValue}`)
    const result = (await axios.get<T[]>(`/${entityName}?${property}=${encodedValue}`)) ?? []
    return convertStringsToDates(result)
  }
