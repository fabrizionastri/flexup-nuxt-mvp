import type { AccountData, Account } from 'lib/entities'

export const fabrizioAccountData: AccountData = {
  id: 'fabrizioAccount',
  name: 'Fabrizio Nastri',
  type: 'personal',
  status: 'active',
  ownerId: 'fabrizioIndividual',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/fabrizio_nastri.jpeg'
}
export const fabrizioAccount: Account = {
  ...fabrizioAccountData,
  symbol: '👤',
  ownerName: 'Fabrizio Nastri',
  ownerType: 'individual',
  ownerSymbol: '🧑‍💻',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const cosysAccountData: AccountData = {
  id: 'cosysAccount',
  name: 'Cosys',
  type: 'business',
  status: 'active',
  ownerId: 'cosysOrganization',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  scope: "Société d'investissement et de conseil en stratégie",
  avatar: '/images/profiles/cosys.png'
}
export const cosysAccount: Account = {
  ...cosysAccountData,
  symbol: '💼',
  ownerName: 'Cosys S.C.',
  ownerType: 'organization',
  ownerSymbol: '🏢',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const flexupAccountData: AccountData = {
  id: 'flexupAccount',
  name: 'FlexUp',
  type: 'subaccount',
  status: 'active',
  ownerId: 'cosysAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/flexup.svg'
}
export const flexupAccount: Account = {
  ...flexupAccountData,
  symbol: '🚀',
  ownerName: 'Cosys',
  ownerType: 'business',
  ownerSymbol: '💼',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const pizzaDOroAccountData: AccountData = {
  id: 'pizzaDOroAccount',
  name: "Pizza d'Oro",
  type: 'subaccount',
  status: 'active',
  ownerId: 'totoAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  scope: 'Pizzeria traditionnelle napolitaine, au coeur du Marais.',
  avatar: '/images/profiles/pizza_d_oro.png'
}
export const pizzaDOroAccount: Account = {
  ...pizzaDOroAccountData,
  symbol: '🚀',
  ownerName: 'Toto La Riflette',
  ownerType: 'personal',
  ownerSymbol: '👤',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const pizzaDOroTakeAwayAccountData: AccountData = {
  id: 'pizzaDOroTakeAwayAccount',
  name: "Pizza d'Oro TakeAway",
  type: 'subaccount',
  status: 'pending',
  ownerId: 'pizzaDOroAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  scope: 'Pizzas à emporter et livraison à domicile.',
  avatar: '/images/profiles/pizza_d_oro_takeaway.png'
}
export const pizzaDOroTakeAwayAccount: Account = {
  ...pizzaDOroTakeAwayAccountData,
  symbol: '🚀',
  ownerName: "Pizza d'Oro",
  ownerType: 'subaccount',
  ownerSymbol: '🚀',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const doMazyAccountData: AccountData = {
  id: 'doMazyAccount',
  name: 'DoMazy',
  type: 'shared',
  status: 'active',
  ownerId: 'doMazyGrouping', // this points to a grouping, which is a cross table.
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  scope: 'Groupement de producteurs agroécologiques du Domaine de Mazy',
  avatar: '/images/profiles/domazy.png'
}
export const doMazyAccount: Account = {
  ...doMazyAccountData,
  symbol: '👥',
  ownerName: 'DoMazy',
  ownerType: 'grouping',
  ownerSymbol: '👪',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const poulaillerMobileAccountData: AccountData = {
  id: 'poulaillerMobile',
  name: 'Poulailler MobiMazy',
  type: 'subaccount',
  status: 'suspended',
  ownerId: 'doMazyAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/poulaillerMobMazy.png'
}
export const poulaillerMobileAccount: Account = {
  ...poulaillerMobileAccountData,
  symbol: '🚀',
  ownerName: 'doMazyAccount',
  ownerType: 'shared',
  ownerSymbol: '👥',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const agroCoopAccountData: AccountData = {
  id: 'agroCoopAccount',
  name: 'Agro Coop',
  status: 'active',
  type: 'business',
  ownerId: 'agroCoopOrganization',
  currencyId: 'CHF',
  countryId: 'CHE',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/agro_coop.png'
}
export const agroCoopAccount: Account = {
  ...agroCoopAccountData,
  symbol: '💼',
  ownerName: 'Agro Coopérative du Canton de Vaud SCOP',
  ownerType: 'organization',
  ownerSymbol: '🏢',
  currencyName: 'Swiss Franc',
  currencySymbol: 'CHF',
  countryName: 'Switzerland'
}

export const totoAccountData: AccountData = {
  id: 'totoAccount',
  name: 'Toto La Riflette',
  status: 'active',
  type: 'personal',
  ownerId: 'totoIndividual',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2018-01-01'),
  avatar: '/images/profiles/toto.png'
}

export const totoAccount: Account = {
  ...totoAccountData,
  symbol: '👤',
  ownerName: 'Toto La Riflette',
  ownerType: 'individual',
  ownerSymbol: '🧑‍💻',
  currencyName: 'Euro',
  currencySymbol: '€',
  countryName: 'France'
}

export const accountDatas = [
  fabrizioAccountData,
  totoAccountData,
  cosysAccountData,
  flexupAccountData,
  pizzaDOroAccountData,
  pizzaDOroTakeAwayAccountData,
  doMazyAccountData,
  poulaillerMobileAccountData,
  agroCoopAccountData
]
export const accounts = [
  fabrizioAccount,
  totoAccount,
  cosysAccount,
  flexupAccount,
  pizzaDOroAccount,
  pizzaDOroTakeAwayAccount,
  doMazyAccount,
  poulaillerMobileAccount,
  agroCoopAccount
]
