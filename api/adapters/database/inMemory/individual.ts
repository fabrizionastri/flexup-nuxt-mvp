import { individualDatas } from 'mock/inMemory'
import { IndividualData } from 'core/entities/individual'
import { createGetById } from './_generic'

export const individualAdapter = {
  getById: createGetById<IndividualData>(individualDatas)
}
