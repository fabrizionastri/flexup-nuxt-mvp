export const accountList = [
  {
    id: 1,
    name: 'FlexUp',
    type: 'Activity',
    icon: '/images/profiles/flexup.svg'
  },
  {
    id: 2,
    name: "Pizza d'Oro",
    type: 'Business',
    icon: '/images/profiles/pizza_d_oro.png'
  },
  {
    id: 3,
    name: 'Fabrizio Nastri',
    type: 'Personal',
    icon: '/images/profiles/fabrizio_nastri.jpeg'
  },
  {
    id: 4,
    name: 'Frédéric Lasnier',
    type: 'Personal',
    icon: '/images/profiles/fred.png'
  }
]

export const getAccounts = (prop = '', value = '') => {
  if (!prop) return accountList
  // returns an array of accounts that match the prop and value
  return accountList.filter((account) => account[prop] === value)
}

export default getAccounts
