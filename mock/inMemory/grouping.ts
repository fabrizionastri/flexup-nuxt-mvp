import { Grouping, GroupingData } from 'entities/grouping'

export const doMazyGroupingData: GroupingData = {
  id: 'doMazyGrouping',
  name: 'Groupement du Domaine de Mazy',
  representativeAccountId: 'agroCoopAccount',
  groupingContractId: 'doMazyGroupingContract',
  creationDate: new Date('2020-01-01'),
  countryId: 'FRA'
}

export const doMazyGrouping: Grouping = {
  ...doMazyGroupingData,
  label: 'Groupement du Domaine de Mazy 👥'
}

export const groupingDatas: GroupingData[] = [doMazyGroupingData]
