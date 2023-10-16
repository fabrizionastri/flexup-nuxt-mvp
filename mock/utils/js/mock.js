export const account = [
  {
    id: 'account1',
    name: 'FlexUp',
    type: 'Activity',
    avatar '/images/profiles/flexup.svg'
  },
  {
    id: 'account2',
    name: "Pizza d'Oro",
    type: 'Business',
    avatar '/images/profiles/pizza_d_oro.png'
  },
  {
    id: 'account3',
    name: 'Fabrizio Nastri',
    type: 'Personal',
    avatar '/images/profiles/fabrizio_nastri.jpeg'
  },
  {
    id: 'account4',
    name: 'Frédéric Lasnier',
    type: 'Personal',
    avatar '/images/profiles/fred.png'
  }
]
export const order = [
  {
    id: 'order0',
    clientId: 'account0',
    supplierId: 'account1',
    name: 'T blues & rouges'
  },
  {
    id: 'order1',
    clientId: 'account2',
    supplierId: 'account0',
    name: '21 T-shirts (bleus + rouges)'
  },
  {
    id: 'order2',
    clientId: 'account3',
    supplierId: 'accountD',
    name: 'Chaussettes'
  },
  {
    id: 'order3',
    clientId: 'account1',
    supplierId: 'account3',
    name: 'Chaussures'
  }
]
