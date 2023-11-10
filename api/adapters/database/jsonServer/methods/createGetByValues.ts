import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import { assertPropertyExists } from './assertPropertyExists'

export const createGetByValues =
  <T extends Entity>(entityName: EntityName) =>
  async (property: keyof T & string, values: unknown[]): Promise<T[]> => {
    const encodedValues = values.map((value) => encodeURIComponent(value as string))

    // Should not be necessary, only for tests & development
    await assertPropertyExists(entityName, property)

    // create a url where the 'property=value' are chained with the "&" operator
    const base = `/${entityName}?${property}=`
    const extras = encodedValues.join(`&${property}=`)
    const url = base + extras
    const result = (await axios.get<T[]>(url)) ?? []
    return convertStringsToDates(result)
  }
