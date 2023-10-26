import type { Entity, EntityName } from 'entities/_generic'
import axios from '../myAxios'

export const createGetById =
  <T extends Entity>(entity: EntityName) =>
  async (id: string): Promise<T[]> => {
    const encodedEntity = encodeURIComponent(entity)
    const encodedId = encodeURIComponent(id as string) // Assuming value can be safely casted to string
    const result = (await axios.get<T[]>(`/${encodedEntity}/${encodedId}`)) ?? []
    return result
  }
