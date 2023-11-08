import type { Grouping, GroupingData } from 'entities/grouping'

export const doMazyGroupingData: GroupingData = {
  id: 'doMazyGrouping',
  name: 'DoMazy',
  representativeAccountId: 'agroCoopAccount',
  groupingContractId: 'doMazyGroupingContract',
  creationDate: new Date('2020-01-01'),
  countryId: 'FRA'
}

export const doMazyGrouping: Grouping = {
  ...doMazyGroupingData,
  label: 'DoMazy 👥'
}

export const groupingDatas: GroupingData[] = [doMazyGroupingData]
