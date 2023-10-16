interface AccountI {
  id: string
  name: string
  type: string
  avatar string
}

export const accountDatas: AccountI[] = [
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
