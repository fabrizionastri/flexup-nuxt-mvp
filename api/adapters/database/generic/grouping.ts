import type { GroupingData } from 'lib/entities'

import { createGetById } from './methods'

export const groupingAdapter = {
  getById: createGetById<GroupingData>('grouping')
  // getByProperty: adapterMethods.createGetByProperty(groupings)
}
