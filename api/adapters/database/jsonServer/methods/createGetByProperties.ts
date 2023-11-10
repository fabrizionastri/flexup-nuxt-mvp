import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetByProperties } from '../../generic/interfaces'
import { assertPropertyExists } from './assertPropertyExists'

export const createGetByProperties: CreateGetByProperties =
  <T extends Entity>(entityName: EntityName) =>
  async (
    property1: keyof T & string,
    value1: unknown,
    property2: keyof T & string,
    value2: unknown,
    andOr: 'and' | 'or' = 'and'
  ): Promise<T[]> => {
    const encodedValue1 = encodeURIComponent(value1 as string)
    const encodedValue2 = encodeURIComponent(value2 as string)

    // Should not be necessary, only for tests & development
    await assertPropertyExists(entityName, property1)
    await assertPropertyExists(entityName, property2)

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
