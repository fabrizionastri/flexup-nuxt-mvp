import { Grouping, GroupingData } from '~/api/core/entities/grouping'

export const doMazyGroupingData: GroupingData = {
  id: 'doMazyGrouping',
  name: 'Groupement du Domaine de Mazy',
  representativeAccountId: 'cooperativeTartempionAccount',
  groupingContractId: 'doMazyGroupingContract',
  creationDate: new Date('2020-01-01'),
  countryId: 'FRA'
}

export const doMazyGrouping: Grouping = {
  ...doMazyGroupingData,
  label: 'Groupement du Domaine de Mazy 👥'
}

export const allGroupingDatas: GroupingData[] = [doMazyGroupingData]
