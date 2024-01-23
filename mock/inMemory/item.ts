import type { ItemComputed, ItemData } from 'entities/item'

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
export const commercialOrderItem1: ItemComputed = {
  ...commercialOrderItem1Data,
  unitPriceInclTax: 12,
  amountExclTax: 100,
  taxAmount: 20,
  amountInclTax: 120
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
export const commercialOrderItem2: ItemComputed = {
  ...commercialOrderItem2Data,
  unitPriceInclTax: 12.1,
  amountExclTax: 121,
  taxAmount: 12.1,
  amountInclTax: 133.1
}
export const itemsForCommercialOrder: ItemComputed[] = [commercialOrderItem1, commercialOrderItem2]

export const orderWithRebateItemData: ItemData = {
  id: 'orderWithRebateItem',
  orderId: 'orderWithRebate',
  name: 'Prestation de service',
  quantity: 100,
  unit: 'hr',
  unitPriceExclTax: 200,
  taxRate: 0
}
export const orderWithRebateItem: ItemComputed = {
  ...orderWithRebateItemData,
  unitPriceInclTax: 6,
  amountExclTax: 60,
  taxAmount: 12,
  amountInclTax: 72
}
export const orderWithNoTranchesItemData: ItemData = {
  id: 'orderWithNoTranchesItem',
  orderId: 'orderWithNoTranches',
  name: 'Chaussures de ville',
  quantity: 14,
  unit: 'pair',
  unitPriceExclTax: 100,
  taxRate: 0.1
}
export const orderWithNoTranchesItem: ItemComputed = {
  ...orderWithNoTranchesItemData,
  unitPriceInclTax: 110,
  amountExclTax: 1400,
  taxAmount: 140,
  amountInclTax: 1540
}

export const itemDatas: ItemData[] = [
  commercialOrderItem1Data,
  commercialOrderItem2Data,
  orderWithRebateItemData,
  orderWithNoTranchesItemData
]
export const items: ItemComputed[] = [
  commercialOrderItem1,
  commercialOrderItem2,
  orderWithRebateItem,
  orderWithNoTranchesItem
]
// Computed items
