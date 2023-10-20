import { GroupingAccountData, GroupingAccount } from 'entities/groupingAccount'

export const doMazyGroupingAgroCoopAccountData: GroupingAccountData = {
  id: 'doMazyGroupingAgroCoopAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'agroCoopAccount',
  role: 'admin'
}

export const doMazyGroupingTotoAccountData: GroupingAccountData = {
  id: 'doMazyGroupingTotoAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'agroCoopAccount',
  role: 'member'
}

export const doMazyGroupingFlexUpAccountData: GroupingAccountData = {
  id: 'doMazyGroupingFlexUpAccount',
  groupingId: 'doMazyGrouping',
  accountId: 'flexUpAccount',
  role: 'member'
}

export const doMazyGroupingFlexUpAccountDatas: GroupingAccountData[] = [
  doMazyGroupingAgroCoopAccountData,
  doMazyGroupingTotoAccountData,
  doMazyGroupingFlexUpAccountData
]

export const groupingAccountDatas: GroupingAccountData[] = [...doMazyGroupingFlexUpAccountDatas]

export const doMazyGroupingAgroCoopAccount: GroupingAccount = {
  ...doMazyGroupingAgroCoopAccountData,
  groupingName: 'Groupement du Domaine de Mazy',
  groupingLabel: 'Groupement du Domaine de Mazy 👥',
  memberName: 'Agro Coop',
  memberLabel: 'Agro Coop 🏢'
}

export const doMazyGroupingTotoAccount: GroupingAccount = {
  ...doMazyGroupingTotoAccountData,
  groupingName: 'Groupement du Domaine de Mazy',
  groupingLabel: 'Groupement du Domaine de Mazy 👥',
  memberName: 'Toto',
  memberLabel: 'Toto 👤'
}

export const doMazyGroupingFlexUpAccount: GroupingAccount = {
  ...doMazyGroupingFlexUpAccountData,
  groupingName: 'Groupement du Domaine de Mazy',
  groupingLabel: 'Groupement du Domaine de Mazy 👥',
  memberName: 'Flex Up',
  memberLabel: 'Flex Up 🚀'
}

export const groupingAccounts: GroupingAccount[] = [
  doMazyGroupingAgroCoopAccount,
  doMazyGroupingTotoAccount,
  doMazyGroupingFlexUpAccount
]
