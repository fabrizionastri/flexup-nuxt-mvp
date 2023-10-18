import { OrderData, Order } from 'entities/order'
import * as items from './item'
import * as tranches from './tranche'

// Orders with raw data only
export const commercialOrderData: OrderData = {
  id: 'commercialOrder',
  supplierAccountId: 'flexupAccount',
  clientAccountId: 'pizzaDOroAccount',
  name: 'T blues & rouges',
  nature: 'commercial',
  principal: 265.2
}
export const orderWithNoItemsData: OrderData = {
  id: 'orderWithNoItems',
  supplierAccountId: 'pizzaDOroAccount',
  clientAccountId: 'fabrizioAccount',
  name: 'Chaussettes',
  nature: 'commercial',
  principal: undefined // new order
}
export const orderWithRebateData: OrderData = {
  id: 'orderWithRebate',
  supplierAccountId: 'cosysAccount',
  clientAccountId: 'domMazyAccount',
  name: 'Prestation de service',
  nature: 'commercial',
  principal: 20000
}
export const orderWithNoTranchesData: OrderData = {
  id: 'orderWithNoTranches',
  supplierAccountId: 'fabrizioAccount',
  clientAccountId: 'cosysAccount',
  name: 'Chaussures',
  nature: 'commercial',
  principal: null // from DB
}
export const fundingOrderData: OrderData = {
  id: 'fundingOrder',
  supplierAccountId: 'domMazyAccount',
  clientAccountId: 'fabrizioAccount',
  name: 'Funding',
  nature: 'financial',
  principal: 1000
}
export const donationOrderData: OrderData = {
  id: 'donationOrder',
  supplierAccountId: 'pizzaDOroTakeAwayAccount',
  clientAccountId: 'pizzaDOroAccount',
  name: 'Donation',
  nature: 'donation',
  principal: 100
}
export const allOrderDatas: OrderData[] = [
  commercialOrderData,
  orderWithNoItemsData,
  orderWithRebateData,
  orderWithNoTranchesData,
  fundingOrderData,
  donationOrderData
]

export const pizzaDOroAccountOrderDatas: OrderData[] = [
  commercialOrderData,
  orderWithNoItemsData,
  donationOrderData
]

// Computed orders
export const commercialOrder: Order = {
  ...commercialOrderData,
  items: items.itemsForCommercialOrder,
  tranches: tranches.tranchesForcommercialOrder,
  amountExclTax: 221,
  taxAmount: 44.2,
  amountInclTax: 265.2,
  averageTaxRate: 0.2,
  principal: 265.2
}
export const orderWithNoItems: Order = {
  ...orderWithNoItemsData,
  items: [],
  amountExclTax: 1000,
  taxAmount: 200,
  amountInclTax: 1200,
  averageTaxRate: 0.2,
  principal: 1200,
  tranches: []
}
export const orderWithRebate: Order = {
  ...orderWithRebateData,
  items: [items.orderWithRebateItem],
  tranches: tranches.tranchesForOrderWithRebate,
  amountExclTax: 138,
  taxAmount: 27.6,
  amountInclTax: 165.6,
  averageTaxRate: 0.2,
  principal: 165.6
}
export const orderWithNoTranches: Order = {
  ...orderWithNoTranchesData,
  items: [items.orderWithNoTranchesItem],
  amountExclTax: 78,
  taxAmount: 15.6,
  amountInclTax: 93.6,
  averageTaxRate: 0.0,
  principal: 93.6,
  tranches: []
}

export const fundingOrder: Order = {
  ...fundingOrderData,
  items: [],
  amountExclTax: 0,
  taxAmount: 0,
  amountInclTax: 0,
  averageTaxRate: 0.0,
  principal: 1000,
  tranches: []
}

export const donationOrder: Order = {
  ...donationOrderData,
  items: [],
  amountExclTax: 0,
  taxAmount: 0,
  amountInclTax: 0,
  averageTaxRate: 0.0,
  principal: 100,
  tranches: []
}

export const allOrders: Order[] = [
  commercialOrder,
  orderWithNoItems,
  orderWithRebate,
  orderWithNoTranches,
  fundingOrder,
  donationOrder
]

export const pizzaDOroAccountOrders: Order[] = [commercialOrder, orderWithRebate, donationOrder]
