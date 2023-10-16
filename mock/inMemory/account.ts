import { AccountData, Account } from 'entities/account'

export const fabrizioNastriAccountData: AccountData = {
  id: 'fabrizioNastriAccount',
  name: 'Fabrizio Nastri',
  type: 'main',
  status: 'active',
  ownerType: 'person',
  ownerId: 'fabrizioNastriAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/fabrizio_nastri.jpeg'
}

export const cosysData: AccountData = {
  id: 'cosys',
  name: 'Cosys',
  type: 'main',
  status: 'active',
  ownerType: 'organization',
  ownerId: 'cosys',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/cosys.png'
}

export const flexupData: AccountData = {
  id: 'flexup',
  name: 'FlexUp',
  type: 'project',
  status: 'active',
  ownerType: 'organization',
  ownerId: 'cosys',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/flexup.svg'
}

export const pizzaDOroData: AccountData = {
  id: 'pizzaDOro',
  name: "Pizza d'Oro",
  type: 'project',
  status: 'active',
  ownerType: 'person',
  ownerId: 'tontonPognon',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/pizza_d_oro.png'
}

export const pizzaDOroTakeAwayData: AccountData = {
  id: 'pizzaDOroTakeAway',
  name: "Pizza d'Oro TakeAway",
  type: 'project',
  status: 'pending',
  ownerType: 'account',
  ownerId: 'pizzaDOro',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/pizza_d_oro.png'
}

export const domMazyData: AccountData = {
  id: 'domMazy',
  name: 'Domaine de Mazy',
  type: 'main',
  status: 'active',
  ownerType: 'grouping',
  ownerId: 'groupementDomMazy',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/fred.png'
}

export const poulaillerMobileData: AccountData = {
  id: 'poulaillerMobile',
  name: 'Poulailler MobiMazy',
  type: 'project',
  status: 'suspended',
  ownerType: 'grouping',
  ownerId: 'domMazy',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/poulaillerMobMazy.png'
}

export const accountDatas = [
  fabrizioNastriAccountData,
  cosysData,
  flexupData,
  pizzaDOroData,
  pizzaDOroTakeAwayData,
  domMazyData,
  poulaillerMobileData
]

// ----------- Computed objects -------------------

export const fabrizioNastriAccount: Account = {
  ...fabrizioNastriAccountData,
  label: 'Fabrizio Nastri 👤',
  ownerName: 'Fabrizio Nastri',
  ownerLabel: 'Fabrizio Nastri 👤',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const cosys: Account = {
  ...cosysData,
  label: 'Cosys 🏢',
  ownerName: 'Cosys',
  ownerLabel: 'Cosys 🏢',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const flexup: Account = {
  ...flexupData,
  label: 'FlexUp 🚀',
  ownerName: 'Cosys',
  ownerLabel: 'Cosys 🏢',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const pizzaDOro: Account = {
  ...pizzaDOroData,
  label: "Pizza d'Oro 🚀",
  ownerName: 'Tonton Pognon',
  ownerLabel: 'Tonton Pognon 👤',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const pizzaDOroTakeAway: Account = {
  ...pizzaDOroTakeAwayData,
  label: "Pizza d'Oro Take Away 🚀",
  ownerName: "Pizza d'Oro",
  ownerLabel: "Pizza d'Oro 🚀",
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const domMazy: Account = {
  ...domMazyData,
  label: 'Domaine de Mazy 🚀',
  ownerName: 'Groupement du Domaine de Mazy',
  ownerLabel: 'Groupement du Domaine de Mazy 👥',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const poulaillerMobile: Account = {
  ...poulaillerMobileData,
  label: 'Poulailler Mobile 🚀',
  ownerName: 'Domaine de Mazy',
  ownerLabel: 'Domaine de Mazy 🚀',
  currencyName: 'Euro',
  currencySymbol: '€'
  // finalOwnerName: 'Groupement du Domaine de Mazy',
  // finalOwnerLabel: 'Groupement du Domaine de Mazy 👥'
}

export const accounts = [
  fabrizioNastriAccount,
  cosys,
  flexup,
  pizzaDOro,
  pizzaDOroTakeAway,
  domMazy,
  poulaillerMobile
]
