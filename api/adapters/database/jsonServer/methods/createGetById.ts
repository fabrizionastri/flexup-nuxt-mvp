import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetById } from '../../generic/interfaces'

export const createGetById: CreateGetById =
  <T extends Entity>(entityName: EntityName) =>
  async (id: string): Promise<T | undefined> => {
    const encodedId = encodeURIComponent(id as string) // Assuming value can be safely casted to string
    const result = await axios.get<T | undefined>(`/${entityName}/${encodedId}`)
    return convertStringsToDates(result)
  }
