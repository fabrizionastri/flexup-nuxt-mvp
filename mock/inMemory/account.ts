import type { AccountData, Account } from 'entities/account'

// --- Raw data

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

export const cosysAccountData: AccountData = {
  id: 'cosysAccount',
  name: 'Cosys',
  type: 'business',
  status: 'active',
  ownerId: 'cosysOrganization',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: "Société d'investissement et de conseil en stratégie",
  avatar: '/images/profiles/cosys.png'
}

export const flexupAccountData: AccountData = {
  id: 'flexupAccount',
  name: 'FlexUp',
  type: 'project',
  status: 'active',
  ownerId: 'cosysAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/flexup.svg'
}

export const pizzaDOroAccountData: AccountData = {
  id: 'pizzaDOroAccount',
  name: "Pizza d'Oro",
  type: 'project',
  status: 'active',
  ownerId: 'totoAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: 'Pizzeria traditionnelle napolitaine, au coeur du Marais.',
  avatar: '/images/profiles/pizza_d_oro.png'
}

export const pizzaDOroTakeAwayAccountData: AccountData = {
  id: 'pizzaDOroTakeAway',
  name: "Pizza d'Oro TakeAway",
  type: 'project',
  status: 'pending',
  ownerId: 'pizzaDOroAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: 'Pizzas à emporter et livraison à domicile.',
  avatar: '/images/profiles/pizza_d_oro.png'
}

export const doMazyAccountData: AccountData = {
  id: 'doMazyAccount',
  name: 'Groupement du Domaine de Mazy',
  type: 'shared',
  status: 'active',
  ownerId: 'doMazyGrouping', // this points to a grouping, which is a cross table.
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: 'Groupement de producteurs agroécologiques du Domaine de Mazy',
  avatar: '/images/profiles/fred.png'
}

export const poulaillerMobileAccountData: AccountData = {
  id: 'poulaillerMobile',
  name: 'Poulailler MobiMazy',
  type: 'project',
  status: 'suspended',
  ownerId: 'doMazy',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/poulaillerMobMazy.png'
}

export const agroCoopAccountData: AccountData = {
  id: 'agroCoopAccount',
  name: 'Agro Coop',
  status: 'active',
  type: 'business',
  ownerId: 'agroCoopOrganization',
  currencyId: 'CFH',
  countryId: 'CHE',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/agro_coop.png'
}

export const accountDatas = [
  fabrizioAccountData,
  cosysAccountData,
  flexupAccountData,
  pizzaDOroAccountData,
  pizzaDOroTakeAwayAccountData,
  doMazyAccountData,
  poulaillerMobileAccountData
]

// --- Computed objects

export const fabrizioAccount: Account = {
  ...fabrizioAccountData,
  symbol: '👤',
  ownerName: 'Fabrizio Nastri',
  ownerType: 'individual', // since the owner is an individual, this is a personal main account
  ownerSymbol: '👤',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
}

export const cosysAccount: Account = {
  ...cosysAccountData,
  symbol: '🏢',
  ownerName: 'Cosys',
  ownerType: 'organization',
  ownerSymbol: '🏢',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
}

export const flexupAccount: Account = {
  ...flexupAccountData,
  symbol: '🚀',
  ownerName: 'Cosys',
  ownerType: 'organization',
  ownerSymbol: '🏢',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
}

export const pizzaDOroAccount: Account = {
  ...pizzaDOroAccountData,
  symbol: '🚀',
  ownerName: 'Toto La Riflette',
  ownerType: 'individual',
  ownerSymbol: '👤',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
}

export const pizzaDOroTakeAwayAccount: Account = {
  ...pizzaDOroTakeAwayAccountData,
  symbol: '🚀',
  ownerName: "Pizza d'Oro",
  ownerType: 'project',
  ownerSymbol: '🚀',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
}

export const doMazyAccount: Account = {
  ...doMazyAccountData,
  symbol: '👥',
  ownerName: 'Groupement du Domaine de Mazy',
  ownerType: 'grouping',
  ownerSymbol: '👥',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
}

export const poulaillerMobileAccount: Account = {
  ...poulaillerMobileAccountData,
  symbol: '🚀',
  ownerName: 'Groupement du Domaine de Mazy',
  ownerType: 'grouping',
  ownerSymbol: '👥',
  currencyName: 'Euro',
  currencySymbol: '€',
  myRole: 'guest'
  // finalOwnerName: 'Groupement du Domaine de Mazy',
  // finalOwnerLabel: 'Groupement du Domaine de Mazy 👥'
}

export const agroCoopAccount: Account = {
  ...agroCoopAccountData,
  symbol: '🏢',
  ownerName: 'Coopérative Agricole de la Broye',
  ownerType: 'organization',
  ownerSymbol: '🏢',
  currencyName: 'Swiss Franc',
  currencySymbol: 'CFH',
  myRole: 'guest'
  // finalOwnerName: 'Groupement du Domaine de Mazy',
  // finalOwnerLabel: 'Groupement du Domaine de Mazy 👥'
}

export const accounts = [
  fabrizioAccount,
  cosysAccount,
  flexupAccount,
  pizzaDOroAccount,
  pizzaDOroTakeAwayAccount,
  doMazyAccount,
  poulaillerMobileAccount
]
