import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const groupings = inMemory.grouping

export const groupingAdapter = {
  getById: adapterMethods.createGetById(groupings),
  getByProperty: adapterMethods.createGetByProperty(groupings)
}
