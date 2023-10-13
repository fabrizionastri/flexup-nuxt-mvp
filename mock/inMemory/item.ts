import { Item, ItemData } from 'entities/item'

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
