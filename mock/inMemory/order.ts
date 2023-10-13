import { tranches } from './tranche'
import { OrderData, Order } from 'entities/order'
import { items } from './item'

export const orderDatas: OrderData[] = [
  {
    id: 'order0',
    clientId: 'account0',
    supplierId: 'account1',
    name: 'T blues & rouges',
    nature: 'commercial',
    principal: 265.2
  },
  {
    id: 'order1',
    clientId: 'account2',
    supplierId: 'account0',
    name: '21 T-shirts (bleus + rouges)',
    nature: 'financial',
    principal: 165.6
  },
  {
    id: 'order2',
    clientId: 'account3',
    supplierId: 'accountD',
    name: 'Chaussettes',
    nature: 'commercial',
    principal: undefined // new order
  },
  {
    id: 'order3',
    clientId: 'account1',
    supplierId: 'account3',
    name: 'Chaussures',
    nature: 'commercial',
    principal: null // from DB
  },
  {
    id: 'order4',
    clientId: 'account3',
    supplierId: 'account4',
    name: 'Funding',
    principal: 1000,
    nature: 'financial'
  },
  {
    id: 'order5',
    clientId: 'account5',
    supplierId: 'account6',
    nature: 'donation',
    principal: 100,
    name: 'Donation'
  }
]

export const orders: Order[] = [
  {
    ...orderDatas[0],
    items: [items[0], items[1]],
    tranches: [tranches[0], tranches[1], tranches[2]],
    amountExclTax: 221,
    taxAmount: 44.2,
    amountInclTax: 265.2,
    averageTaxRate: 0.2,
    principal: 265.2
  },
  {
    ...orderDatas[1],
    items: [items[2], items[3]],
    tranches: [tranches[3], tranches[4]],
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
    principal: 3700,
    tranches: []
  },
  {
    ...orderDatas[3],
    items: [],
    amountExclTax: 0,
    taxAmount: 0,
    amountInclTax: 0,
    averageTaxRate: 0.0,
    principal: 0,
    tranches: []
  }
]

export const orderWithNoItemData: OrderData = {
  id: 'orderWithNoItemData',
  clientId: 'account9',
  supplierId: 'account8',
  name: 'Order with no item data',
  nature: 'financial',
  principal: undefined
}

export const orderWithNoItem: Order = {
  id: 'orderWithNoItemData',
  items: [],
  tranches: [],
  clientId: 'account9',
  supplierId: 'account8',
  name: 'Order with no item data',
  nature: 'financial',
  amountExclTax: undefined,
  amountInclTax: undefined,
  taxAmount: undefined,
  averageTaxRate: undefined,
  principal: undefined
}
