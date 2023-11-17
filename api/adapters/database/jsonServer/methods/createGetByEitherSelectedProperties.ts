import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetByEitherSelectedProperties } from '../../generic/interfaces'
import { assertPropertyExists } from './assertPropertyExists'

export const createGetByEitherSelectedProperties: CreateGetByEitherSelectedProperties =
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T & string,
    property2: keyof T & string
  ) =>
  async (value: unknown): Promise<T[]> => {
    const encodedValue = encodeURIComponent(value as string)

    // Should not be necessary, only for tests & development
    await assertPropertyExists(entityName, property1)
    await assertPropertyExists(entityName, property2)

    let url = `/${entityName}?`

    url += `${property1}=${encodedValue}`
    const results1 = (await axios.get<T[]>(url)) ?? []
    url = `/${entityName}?${property2}=${encodedValue}`
    const results2 = (await axios.get<T[]>(url)) ?? []
    const results = [...results1, ...results2]

    return convertStringsToDates(results)
  }
