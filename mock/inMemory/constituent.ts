import type { ConstituentData, Constituent } from 'entities/constituent'

export const doMazyGroupingAgroCoopAccountData: ConstituentData = {
  id: 'doMazyGroupingAgroCoopAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'agroCoopAccount',
  joinedDate: new Date('2021-01-01'),
  status: 'active'
}

export const doMazyGroupingTotoAccountData: ConstituentData = {
  id: 'doMazyGroupingTotoAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'totoAccount',
  joinedDate: new Date('2024-01-01'),
  status: 'pending'
}

export const doMazyGroupingFlexUpAccountData: ConstituentData = {
  id: 'doMazyGroupingFlexUpAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'flexUpAccount',
  joinedDate: new Date('2021-05-01'),
  leftDate: new Date('2024-06-01'),
  status: 'expelled'
}

export const plopGroupingTotoAccountData: ConstituentData = {
  id: 'plopGroupingFlexUpAccount',
  groupingId: 'plopGrouping',
  accountId: 'totoAccount',
  joinedDate: new Date('2021-05-01'),
  leftDate: new Date('2024-06-01'),
  status: 'quit'
}

export const doMazyConstituentDatas: ConstituentData[] = [
  doMazyGroupingAgroCoopAccountData,
  doMazyGroupingTotoAccountData,
  doMazyGroupingFlexUpAccountData
]

export const constituentDatas: ConstituentData[] = [
  ...doMazyConstituentDatas,
  plopGroupingTotoAccountData
]

export const doMazyGroupingAgroCoopAccount: Constituent = {
  ...doMazyGroupingAgroCoopAccountData,
  groupingName: 'DoMazy',
  groupingLabel: 'DoMazy 👥',
  memberName: 'Agro Coop',
  memberLabel: 'Agro Coop 🏢'
}

export const doMazyGroupingTotoAccount: Constituent = {
  ...doMazyGroupingTotoAccountData,
  groupingName: 'DoMazy',
  groupingLabel: 'DoMazy 👥',
  memberName: 'Toto',
  memberLabel: 'Toto 👤'
}

export const doMazyGroupingFlexUpAccount: Constituent = {
  ...doMazyGroupingFlexUpAccountData,
  groupingName: 'DoMazy',
  groupingLabel: 'DoMazy 👥',
  memberName: 'Flex Up',
  memberLabel: 'Flex Up 🚀'
}

export const constituents: Constituent[] = [
  doMazyGroupingAgroCoopAccount,
  doMazyGroupingTotoAccount,
  doMazyGroupingFlexUpAccount
]
