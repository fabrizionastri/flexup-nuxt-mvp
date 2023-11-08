import type { GroupingAccountData, GroupingAccount } from 'entities/groupingAccount'

export const doMazyGroupingAgroCoopAccountData: GroupingAccountData = {
  id: 'doMazyGroupingAgroCoopAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'agroCoopAccount',
  role: 'admin'
}

export const doMazyGroupingTotoAccountData: GroupingAccountData = {
  id: 'doMazyGroupingTotoAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'totoAccount',
  role: 'member'
}

export const doMazyGroupingFlexUpAccountData: GroupingAccountData = {
  id: 'doMazyGroupingFlexUpAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'flexUpAccount',
  role: 'member'
}

export const plopGroupingTotoAccountData: GroupingAccountData = {
  id: 'plopGroupingFlexUpAccount',
  groupingId: 'plopGrouping',
  accountId: 'totoAccount',
  role: 'admin'
}

export const doMazyGroupingAccountDatas: GroupingAccountData[] = [
  doMazyGroupingAgroCoopAccountData,
  doMazyGroupingTotoAccountData,
  doMazyGroupingFlexUpAccountData
]

export const groupingAccountDatas: GroupingAccountData[] = [
  ...doMazyGroupingAccountDatas,
  plopGroupingTotoAccountData
]

export const doMazyGroupingAgroCoopAccount: GroupingAccount = {
  ...doMazyGroupingAgroCoopAccountData,
  groupingName: 'DoMazy',
  groupingLabel: 'DoMazy 👥',
  memberName: 'Agro Coop',
  memberLabel: 'Agro Coop 🏢'
}

export const doMazyGroupingTotoAccount: GroupingAccount = {
  ...doMazyGroupingTotoAccountData,
  groupingName: 'DoMazy',
  groupingLabel: 'DoMazy 👥',
  memberName: 'Toto',
  memberLabel: 'Toto 👤'
}

export const doMazyGroupingFlexUpAccount: GroupingAccount = {
  ...doMazyGroupingFlexUpAccountData,
  groupingName: 'DoMazy',
  groupingLabel: 'DoMazy 👥',
  memberName: 'Flex Up',
  memberLabel: 'Flex Up 🚀'
}

export const groupingAccounts: GroupingAccount[] = [
  doMazyGroupingAgroCoopAccount,
  doMazyGroupingTotoAccount,
  doMazyGroupingFlexUpAccount
]
