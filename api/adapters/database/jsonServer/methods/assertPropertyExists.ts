import type { Entity, EntityName } from 'lib/entities'
import axios from '../myAxios'

// TODO: I probably should remove this check, but for the jsonServer I need to make sure that the properties exist, otherwise it returns all the entities
// This is propably an overkill, but I want to make sure that the properties exist, since Ttypescript does not seem to be able to check this

export const assertPropertyExists = async <T extends Entity>(
  entityName: EntityName,
  property: string
): Promise<boolean> => {
  const sampleResult = await axios.get<T[]>(`/${entityName}?_limit=1`)

  if (!sampleResult || sampleResult.length === 0 || !(property in sampleResult[0])) {
    throw new Error(`Invalid property: ${property} for entity: ${entityName}`)
  }
  return true
}
