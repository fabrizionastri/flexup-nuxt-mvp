import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetBySelectedProperties } from '../../generic/interfaces'

export const createGetBySelectedProperties: CreateGetBySelectedProperties =
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T & string,
    property2: keyof T & string,
    andOr: 'and' | 'or' = 'and'
  ) =>
  async (value1: unknown, value2: unknown): Promise<T[]> => {
    const encodedValue1 = encodeURIComponent(value1 as string)
    const encodedValue2 = encodeURIComponent(value2 as string)

    let url = `/${entityName}?`
    let results,
      results1,
      results2 = [] as T[]

    if (andOr === 'and') {
      url += `${property1}=${encodedValue1}&${property2}=${encodedValue2}`
      results = (await axios.get<T[]>(url)) ?? []
    } else {
      url += `${property1}=${encodedValue1}`
      results1 = (await axios.get<T[]>(url)) ?? []
      url = `/${entityName}?${property2}=${encodedValue2}`
      results2 = (await axios.get<T[]>(url)) ?? []
      results = [...results1, ...results2]
    }

    return convertStringsToDates(results)
  }
