import type { OrganizationData } from 'lib/entities'

import { createGetById } from './methods'

export const organizationAdapter = {
  getById: createGetById<OrganizationData>('organization')
}
