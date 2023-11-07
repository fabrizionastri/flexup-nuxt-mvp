import { convertStringsToDates } from './../../../../../lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetBySelectedProperties } from '../../generic/interfaces'

export const createGetBySelectedProperties: CreateGetBySelectedProperties =
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T,
    property2: keyof T,
    andOr: 'and' | 'or' = 'and'
  ) =>
  async (value1: unknown, value2: unknown): Promise<T[]> => {
    const encodedEntity = encodeURIComponent(entityName)
    const encodedProperty1 = encodeURIComponent(property1 as string)
    const encodedValue1 = encodeURIComponent(value1 as string)
    const encodedProperty2 = encodeURIComponent(property2 as string)
    const encodedValue2 = encodeURIComponent(value2 as string)

    let url = `/${encodedEntity}?`
    let results,
      results1,
      results2 = [] as T[]

    if (andOr === 'and') {
      url += `${encodedProperty1}=${encodedValue1}&${encodedProperty2}=${encodedValue2}`
      results = (await axios.get<T[]>(url)) ?? []
    } else {
      url += `${encodedProperty1}=${encodedValue1}`
      results1 = (await axios.get<T[]>(url)) ?? []
      url = `/${encodedEntity}?${encodedProperty2}=${encodedValue2}`
      results2 = (await axios.get<T[]>(url)) ?? []
      results = [...results1, ...results2]
    }

    return convertStringsToDates(results)
  }
