import { organizationDatas } from 'mock/inMemory'
import { OrganizationData } from 'entities/organization'
import { createGetById } from './inMemory'

export const organizationAdapter = {
  getById: createGetById<OrganizationData>(organizationDatas)
}
