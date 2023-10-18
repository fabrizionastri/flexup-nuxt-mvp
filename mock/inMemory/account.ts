import { AccountData, Account } from 'entities/account'

export const fabrizioAccountData: AccountData = {
  id: 'fabrizioAccount',
  name: 'Fabrizio Nastri',
  // type: 'personal',
  status: 'active',
  ownerType: 'individual', // since the owner is an individual, this is a personal main account
  ownerId: 'fabrizioIndividual',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/fabrizio_nastri.jpeg'
}

export const cosysAccountData: AccountData = {
  id: 'cosysAccount',
  name: 'Cosys',
  // type: 'organization',
  status: 'active',
  ownerType: 'organization', // since the owner is an organization, this is an organization main account
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
  // type: 'project',
  status: 'active',
  ownerType: 'account', // since the owner is an account, this is a project account
  ownerId: 'cosysAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/flexup.svg'
}

export const pizzaDOroAccountData: AccountData = {
  id: 'pizzaDOro',
  name: "Pizza d'Oro",
  // type: 'project',
  status: 'active',
  ownerType: 'account', // since the owner is an account, this is a project account
  ownerId: 'tontonPognonAccount',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: 'Pizzeria traditionnelle napolitaine, au coeur du Marais.',
  avatar: '/images/profiles/pizza_d_oro.png'
}

export const pizzaDOroTakeAwayAccountData: AccountData = {
  id: 'pizzaDOroTakeAway',
  name: "Pizza d'Oro TakeAway",
  // type: 'project',
  status: 'pending',
  ownerType: 'account',
  ownerId: 'pizzaDOro',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: 'Pizzas à emporter et livraison à domicile.',
  avatar: '/images/profiles/pizza_d_oro.png'
}

export const domMazyAccountData: AccountData = {
  id: 'domMazyAccount',
  name: 'Domaine de Mazy',
  // type: 'main',
  status: 'active',
  ownerType: 'grouping', // since the owner is an grouping, this is a projet account, but with several owners
  ownerId: 'domMazyGrouping', // this points to a grouping, which is a cross table.
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  description: 'Groupement de producteurs agroécologiques du Domaine de Mazy',
  avatar: '/images/profiles/fred.png'
}

export const poulaillerMobileAccountData: AccountData = {
  id: 'poulaillerMobile',
  name: 'Poulailler MobiMazy',
  // type: 'project',
  status: 'suspended',
  ownerType: 'grouping',
  ownerId: 'domMazy',
  currencyId: 'EUR',
  countryId: 'FRA',
  creationDate: new Date('2020-01-01'),
  avatar: '/images/profiles/poulaillerMobMazy.png'
}

export const allAccountDatas = [
  fabrizioAccountData,
  cosysAccountData,
  flexupAccountData,
  pizzaDOroAccountData,
  pizzaDOroTakeAwayAccountData,
  domMazyAccountData,
  poulaillerMobileAccountData
]

// ----------- Computed objects -------------------

export const fabrizioAccount: Account = {
  ...fabrizioAccountData,
  label: 'Fabrizio Nastri 👤',
  ownerName: 'Fabrizio Nastri',
  ownerLabel: 'Fabrizio Nastri 👤',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const cosysAccount: Account = {
  ...cosysAccountData,
  label: 'Cosys 🏢',
  ownerName: 'Cosys',
  ownerLabel: 'Cosys 🏢',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const flexupAccount: Account = {
  ...flexupAccountData,
  label: 'FlexUp 🚀',
  ownerName: 'Cosys',
  ownerLabel: 'Cosys 🏢',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const pizzaDOroAccount: Account = {
  ...pizzaDOroAccountData,
  label: "Pizza d'Oro 🚀",
  ownerName: 'Tonton Pognon',
  ownerLabel: 'Tonton Pognon 👤',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const pizzaDOroTakeAwayAccount: Account = {
  ...pizzaDOroTakeAwayAccountData,
  label: "Pizza d'Oro Take Away 🚀",
  ownerName: "Pizza d'Oro",
  ownerLabel: "Pizza d'Oro 🚀",
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const domMazyAccount: Account = {
  ...domMazyAccountData,
  label: 'Domaine de Mazy 🚀',
  ownerName: 'Groupement du Domaine de Mazy',
  ownerLabel: 'Groupement du Domaine de Mazy 👥',
  currencyName: 'Euro',
  currencySymbol: '€'
}

export const poulaillerMobileAccount: Account = {
  ...poulaillerMobileAccountData,
  label: 'Poulailler Mobile 🚀',
  ownerName: 'Domaine de Mazy',
  ownerLabel: 'Domaine de Mazy 🚀',
  currencyName: 'Euro',
  currencySymbol: '€'
  // finalOwnerName: 'Groupement du Domaine de Mazy',
  // finalOwnerLabel: 'Groupement du Domaine de Mazy 👥'
}

export const allAccounts = [
  fabrizioAccount,
  cosysAccount,
  flexupAccount,
  pizzaDOroAccount,
  pizzaDOroTakeAwayAccount,
  domMazyAccount,
  poulaillerMobileAccount
]
