import { Item, ItemData } from 'entities/item'

// Items with raw data only
export const commercialOrderItem1Data: ItemData = {
  id: 'commercialOrderItem1',
  orderId: 'commercialOrder',
  name: 'T-shirt bleu',
  quantity: 10,
  unit: 'unit',
  unitPriceExclTax: 10,
  taxRate: 0.2
}
export const commercialOrderItem2Data: ItemData = {
  id: 'commercialOrderItem2',
  orderId: 'commercialOrder',
  name: 'T-shirt rouge',
  quantity: 11,
  unit: 'unit',
  unitPriceExclTax: 11,
  taxRate: 0.1
}
export const orderWithRebateItemData: ItemData = {
  id: 'orderWithRebateItem',
  orderId: 'orderWithRebate',
  name: 'Prestation de service',
  quantity: 100,
  unit: 'hr',
  unitPriceExclTax: 200,
  taxRate: 0
}
export const orderWithNoTranchesItemData: ItemData = {
  id: 'orderWithNoTranchesItem',
  orderId: 'orderWithNoItems',
  name: 'Chaussures de ville',
  quantity: 14,
  unit: 'pair',
  unitPriceExclTax: 100,
  taxRate: 0.1
}

// export const orderWithNoItems: ItemData = {
//   id: 'item5',
//   orderId: 'orderWithNoItems',
//   name: 'Chaussures de sport',
//   quantity: 15,
//   unit: 'pair',
//   unitPriceExclTax: 120,
//   taxRate: 0.2
// }

export const allItemDatas: ItemData[] = [
  commercialOrderItem1Data,
  commercialOrderItem2Data,
  orderWithRebateItemData,
  orderWithNoTranchesItemData
]

// Computed items
export const commercialOrderItem1: Item = {
  ...commercialOrderItem1Data,
  unitPriceInclTax: 12,
  amountExclTax: 100,
  taxAmount: 20,
  amountInclTax: 120
}
export const commercialOrderItem2: Item = {
  ...commercialOrderItem2Data,
  unitPriceInclTax: 13.2,
  amountExclTax: 121,
  taxAmount: 24.2,
  amountInclTax: 145.2
}
export const orderWithRebateItem: Item = {
  ...orderWithRebateItemData,
  unitPriceInclTax: 6,
  amountExclTax: 60,
  taxAmount: 12,
  amountInclTax: 72
}
export const orderWithNoTranchesItem: Item = {
  ...orderWithNoTranchesItemData,
  unitPriceInclTax: 7.2,
  amountExclTax: 78,
  taxAmount: 15.6,
  amountInclTax: 93.6
}
// export const commercialOrderItem1: Item = {
//   ...itemDatas[4],
//   unitPriceInclTax: 110,
//   amountExclTax: 1400,
//   taxAmount: 140,
//   amountInclTax: 1540
// }
//
// export const commercialOrderItem1: Item = {
//   ...itemDatas[5],
//   unitPriceInclTax: 144,
//   amountExclTax: 1800,
//   taxAmount: 360,
//   amountInclTax: 2160
// }

export const allItems: Item[] = [
  commercialOrderItem1,
  commercialOrderItem2,
  orderWithRebateItem,
  orderWithNoTranchesItem
]

export const itemsForCommercialOrder: Item[] = [commercialOrderItem1, commercialOrderItem2]
