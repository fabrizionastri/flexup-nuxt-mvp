import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import type { Entity, EntityName } from 'entities/entity'
import axios from '../myAxios'
import type { CreateGetByIds } from '../../generic/interfaces'

export const createGetByIds: CreateGetByIds =
  <T extends Entity>(entityName: EntityName) =>
  async (ids: unknown[]): Promise<T[]> => {
    const encodedIds = ids.map((value) => encodeURIComponent(value as string))
    // create a url where the 'property=value' are chained with the "&" operator
    const queryString = encodedIds.map((id) => `id=${id}`).join('&')
    const result = (await axios.get<T[]>(`/${entityName}?${queryString}`)) ?? []
    return convertStringsToDates(result)
  }
