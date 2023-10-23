import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const organizations = inMemory.organization

export const organizationAdapter = {
  getById: adapterMethods.createGetById(organizations)
}
