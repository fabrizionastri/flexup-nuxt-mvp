import { Item, ItemData } from 'core/entities/item'

import { Order, OrderData } from 'core/entities/order'

export const itemDatas: ItemData[] = [
  {
    id: 'item0',
    orderId: 'order0',
    name: 'T-shirt bleu',
    quantity: 10,
    unit: 'unit',
    unitPriceExclTax: 10,
    taxRate: 0.2
  },
  {
    id: 'item1',
    orderId: 'order0',
    name: 'T-shirt rouge',
    quantity: 11,
    unit: 'unit',
    unitPriceExclTax: 11,
    taxRate: 0.2
  },
  {
    id: 'item2',
    orderId: 'order1',
    name: 'Chaussettes à petits pois',
    quantity: 12,
    unit: 'pair',
    unitPriceExclTax: 5,
    taxRate: 0.2
  },
  {
    id: 'item3',
    orderId: 'order1',
    name: 'Chaussettes à rayures',
    quantity: 13,
    unit: 'pair',
    unitPriceExclTax: 6,
    taxRate: 0.2
  },
  {
    id: 'item4',
    orderId: 'order2',
    name: 'Chaussures de ville',
    quantity: 14,
    unit: 'pair',
    unitPriceExclTax: 100,
    taxRate: 0.1
  },
  {
    id: 'item5',
    orderId: 'order2',
    name: 'Chaussures de sport',
    quantity: 15,
    unit: 'pair',
    unitPriceExclTax: 120,
    taxRate: 0.2
  }
]

export const items: Item[] = [
  {
    ...itemDatas[0],
    unitPriceInclTax: 12,
    amountExclTax: 100,
    taxAmount: 20,
    amountInclTax: 120
  },
  {
    ...itemDatas[1],
    unitPriceInclTax: 13.2,
    amountExclTax: 121,
    taxAmount: 24.2,
    amountInclTax: 145.2
  },
  {
    ...itemDatas[2],
    unitPriceInclTax: 6,
    amountExclTax: 60,
    taxAmount: 12,
    amountInclTax: 72
  },
  {
    ...itemDatas[3],
    unitPriceInclTax: 7.2,
    amountExclTax: 78,
    taxAmount: 15.6,
    amountInclTax: 93.6
  },
  {
    ...itemDatas[4],
    unitPriceInclTax: 110,
    amountExclTax: 1400,
    taxAmount: 140,
    amountInclTax: 1540
  },
  {
    ...itemDatas[5],
    unitPriceInclTax: 144,
    amountExclTax: 1800,
    taxAmount: 360,
    amountInclTax: 2160
  }
]

export const orderDatas: OrderData[] = [
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

export const orders: Order[] = [
  {
    ...orderDatas[0],
    items: [items[0], items[1]],
    amountExclTax: 221,
    taxAmount: 44.2,
    amountInclTax: 265.2,
    averageTaxRate: 0.2,
    principal: 265.2
  },
  {
    ...orderDatas[1],
    items: [items[2], items[3]],
    amountExclTax: 138,
    taxAmount: 27.6,
    amountInclTax: 165.6,
    averageTaxRate: 0.2,
    principal: 165.6
  },
  {
    ...orderDatas[2],
    items: [items[4], items[5]],
    amountExclTax: 3200,
    taxAmount: 500,
    amountInclTax: 3700,
    averageTaxRate: 0.15,
    principal: 3700
  },
  {
    ...orderDatas[3],
    items: [],
    amountExclTax: 0,
    taxAmount: 0,
    amountInclTax: 0,
    averageTaxRate: 0.0,
    principal: 0
  }
]

export const accountDatas = [
  {
    id: 'account1',
    name: 'FlexUp',
    type: 'Activity',
    icon: '/images/profiles/flexup.svg'
  },
  {
    id: 'account2',
    name: "Pizza d'Oro",
    type: 'Business',
    icon: '/images/profiles/pizza_d_oro.png'
  },
  {
    id: 'account3',
    name: 'Fabrizio Nastri',
    type: 'Personal',
    icon: '/images/profiles/fabrizio_nastri.jpeg'
  },
  {
    id: 'account4',
    name: 'Frédéric Lasnier',
    type: 'Personal',
    icon: '/images/profiles/fred.png'
  }
]

export const trancheDatas = [
  {
    id: 'tranche1',
    orderId: 'order1',
    portion: 0.5,
    name: 'base 60%',
    paymentTerms: ''
  },
  {
    id: 'tranche2',
    orderId: 'order1',
    portion: 0.5,
    name: 'flex 40%',
    paymentTerms: ''
  }
]

export const inMemory = {
  orders: orderDatas,
  items: itemDatas,
  tranches: trancheDatas,
  accounts: accountDatas
}

export default inMemory
