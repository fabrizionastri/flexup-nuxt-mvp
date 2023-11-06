import inMemory from 'mock/inMemory'
import { createGetById } from './methods'

const groupings = inMemory.grouping

export const groupingAdapter = {
  getById: createGetById('grouping')
  // getByProperty: adapterMethods.createGetByProperty(groupings)
}
