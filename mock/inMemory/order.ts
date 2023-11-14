import type { Order } from 'entities/order'
import * as items from './item'
import * as tranches from './tranche'

// Orders with raw data only
export const commercialOrderData: Order = {
  id: 'commercialOrder',
  supplierAccountId: 'flexupAccount',
  clientAccountId: 'pizzaDOroAccount',
  name: 'T blues & rouges',
  nature: 'commercial',
  amountInclTax: 253.1
}
export const commercialOrder: Order = {
  ...commercialOrderData,
  items: items.itemsForCommercialOrder,
  tranches: tranches.tranchesForcommercialOrder,
  amountExclTax: 221,
  taxAmount: 32.1,
  amountInclTax: 253.1,
  averageTaxRate: 0.145249
}
export const orderWithRebateData: Order = {
  id: 'orderWithRebate',
  supplierAccountId: 'cosysAccount',
  clientAccountId: 'doMazyAccount',
  name: 'Prestation de service',
  nature: 'commercial',
  amountInclTax: 20000 // Note that this value is overriden by the items total calculation
}
export const orderWithNoItemsData: Order = {
  id: 'orderWithNoItems',
  supplierAccountId: 'pizzaDOroAccount',
  clientAccountId: 'fabrizioAccount',
  name: 'Chaussettes',
  nature: 'commercial',
  amountExclTax: 1000,
  taxAmount: 200,
  amountInclTax: 1200,
  averageTaxRate: 0.2
}
export const orderWithNoTranchesData: Order = {
  id: 'orderWithNoTranches',
  supplierAccountId: 'fabrizioAccount',
  clientAccountId: 'cosysAccount',
  name: 'Chaussures',
  nature: 'commercial',
  amountInclTax: 1540
}
export const fundingOrderData: Order = {
  id: 'fundingOrder',
  supplierAccountId: 'doMazyAccount',
  clientAccountId: 'fabrizioAccount',
  name: 'Funding',
  nature: 'financial',
  amountInclTax: 1000
}
export const donationOrderData: Order = {
  id: 'donationOrder',
  supplierAccountId: 'pizzaDOroTakeAwayAccount',
  clientAccountId: 'pizzaDOroAccount',
  name: 'Donation',
  nature: 'donation',
  amountInclTax: 100
}
export const orderDatas: Order[] = [
  commercialOrderData,
  orderWithNoItemsData,
  orderWithRebateData,
  orderWithNoTranchesData,
  fundingOrderData,
  donationOrderData
]

export const pizzaDOroAccountOrderDatas: Order[] = [
  commercialOrderData,
  orderWithNoItemsData,
  donationOrderData
]

// Computed orders

export const commercialOrderWithItemsOnly: Order = {
  ...commercialOrderData,
  items: items.itemsForCommercialOrder,
  tranches: [],
  amountExclTax: 221,
  taxAmount: 32.1,
  amountInclTax: 253.1,
  averageTaxRate: 0.145249
}

export const orderWithNoItems: Order = {
  ...orderWithNoItemsData,
  items: [],
  amountExclTax: 1000,
  taxAmount: 200,
  amountInclTax: 1200,
  averageTaxRate: 0.2,
  tranches: [tranches.orderWithNoItemsFirm100]
}
export const orderWithRebate: Order = {
  ...orderWithRebateData,
  items: [items.orderWithRebateItem],
  tranches: tranches.tranchesForOrderWithRebate,
  amountExclTax: 138,
  taxAmount: 27.6,
  amountInclTax: 165.6,
  averageTaxRate: 0.2
}
export const orderWithNoTranches: Order = {
  ...orderWithNoTranchesData,
  items: [items.orderWithNoTranchesItem],
  amountExclTax: 1400,
  taxAmount: 140,
  amountInclTax: 1540,
  averageTaxRate: 0.1,
  tranches: []
}

export const fundingOrder: Order = {
  ...fundingOrderData,
  items: [],
  amountExclTax: 0,
  taxAmount: 0,
  amountInclTax: 0,
  averageTaxRate: 0.0,
  tranches: []
}

export const donationOrder: Order = {
  ...donationOrderData,
  items: [],
  // amountExclTax: 100,
  // taxAmount: 0,
  // averageTaxRate: 0.0,
  amountInclTax: 100,
  tranches: [tranches.donationOrder100]
}

export const orders: Order[] = [
  commercialOrder,
  orderWithNoItems,
  orderWithRebate,
  orderWithNoTranches,
  fundingOrder,
  donationOrder
]

export const pizzaDOroAccountOrders: Order[] = [commercialOrder, orderWithNoItems, donationOrder]
