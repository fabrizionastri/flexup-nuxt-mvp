import type { Grouping, GroupingData } from 'entities/grouping'

export const doMazyGroupingData: GroupingData = {
  id: 'doMazyGrouping',
  name: 'DoMazy',
  representativeAccountId: 'agroCoopAccount',
  groupingContractId: 'doMazyGroupingContract',
  creationDate: new Date('2020-01-01'),
  createdByMemberId: 'flexupAccount:fabrizioUser',
  countryId: 'FRA',
  status: 'active',
  scope: 'An sustainable agricultural community on the DoMazy farm'
}

export const doMazyGrouping: Grouping = {
  ...doMazyGroupingData,
  label: 'DoMazy 👥'
}

export const groupingDatas: GroupingData[] = [doMazyGroupingData]
