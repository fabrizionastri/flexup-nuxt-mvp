interface OrderI {
  id: string
  clientId: string
  supplierId: string
  name: string
}

export const orderDatas: OrderI[] = [
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
