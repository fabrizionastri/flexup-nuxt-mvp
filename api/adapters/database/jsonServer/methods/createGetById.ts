import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'

export const createGetById =
  <T extends Entity>(entity: EntityName) =>
  async (id: string): Promise<T | undefined> => {
    const encodedEntity = encodeURIComponent(entity)
    const encodedId = encodeURIComponent(id as string) // Assuming value can be safely casted to string
    return await axios.get<T | undefined>(`/${encodedEntity}/${encodedId}`)
  }
