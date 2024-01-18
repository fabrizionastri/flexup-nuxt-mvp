import type { Tranche, TrancheData } from 'entities/tranche'

// commercialOrder
export const commercialOrderPreferred50Data: TrancheData = {
  id: 'commercialOrderPreferred50Data',
  name: '50% preferred',
  orderId: 'commercialOrder',
  portion: 0.5,
  paymentTerms: { primaryPriority: 'preferred' }
}

export const commercialOrderPreferred50: Tranche = {
  ...commercialOrderPreferred50Data,
  sign: 1,
  principal: 126.55,
  payorId: 'pizzaDOroAccount',
  payeeId: 'flexupAccount'
}

export const commercialOrderFlex30Data: TrancheData = {
  id: 'commercialOrderFlex30Data',
  name: '30% flex',
  orderId: 'commercialOrder',
  portion: 0.3,
  paymentTerms: { primaryPriority: 'flex' }
}
export const commercialOrderFlex30: Tranche = {
  ...commercialOrderFlex30Data,
  sign: 1,
  principal: 75.93,
  payorId: 'pizzaDOroAccount',
  payeeId: 'flexupAccount'
}

export const commercialOrderCredit30interestData: TrancheData = {
  id: 'commercialOrderCredit30interestData',
  name: '30% credit 5%',
  orderId: 'commercialOrder',
  portion: 0.2,
  paymentTerms: {
    primaryPriority: 'credit',
    interestRate: 0.05,
    interestPriority: 'credit',
    interestStart: 'deferral',
    interestPeriod: 'sameAsPrimary'
  }
}
export const commercialOrderCredit30interest: Tranche = {
  ...commercialOrderCredit30interestData,
  sign: 1,
  principal: 50.62,
  payorId: 'pizzaDOroAccount',
  payeeId: 'flexupAccount'
}

export const trancheDatasForcommercialOrder: TrancheData[] = [
  commercialOrderPreferred50Data,
  commercialOrderFlex30Data,
  commercialOrderCredit30interestData
]
export const tranchesForcommercialOrder: Tranche[] = [
  commercialOrderPreferred50,
  commercialOrderFlex30,
  commercialOrderCredit30interest
]

// orderWithRebate
export const orderWithRebateUpfront150Data: TrancheData = {
  id: 'orderWithRebateUpfront150Data',
  orderId: 'orderWithRebate',
  portion: 1.5,
  name: '150% upfront price',
  paymentTerms: { primaryPriority: 'firm' }
}
export const orderWithRebateUpfront150: Tranche = {
  ...orderWithRebateUpfront150Data,
  sign: 1,
  principal: 248.4,
  payorId: 'doMazyAccount',
  payeeId: 'cosysAccount'
}

export const orderWithRebateFlexRebate50Data: TrancheData = {
  id: 'orderWithRebateFlexRebate50Data',
  name: '50% flex rebate (in a year)',
  orderId: 'orderWithRebate',
  portion: -0.5,
  paymentTerms: { primaryPriority: 'flex', mainPeriod: 'year' }
}
export const orderWithRebateFlexRebate50: Tranche = {
  ...orderWithRebateFlexRebate50Data,
  sign: -1,
  principal: 1200,
  payorId: 'cosysAccount',
  payeeId: 'doMazyAccount'
}
export const tranchesForOrderWithRebate: Tranche[] = [
  orderWithRebateUpfront150,
  orderWithRebateFlexRebate50
]

// orderWithNoItems
export const orderWithNoItemsFirm100Data: TrancheData = {
  id: 'orderWithNoItemsFirm100',
  name: '100% firm',
  orderId: 'orderWithNoItems',
  portion: 1,
  paymentTerms: { primaryPriority: 'firm' }
}
export const orderWithNoItemsFirm100: Tranche = {
  ...orderWithNoItemsFirm100Data,
  sign: 1,
  principal: 96,
  payorId: 'fabrizioAccount',
  payeeId: 'pizzaDOroAccount'
}

// fundingOrder
export const fundingOrderUpfront100Data: TrancheData = {
  id: 'fundingOrderUpfront100',
  name: 'Funding',
  orderId: 'fundingOrder',
  portion: 1,
  paymentTerms: { primaryPriority: 'firm' }
}
export const fundingOrderUpfront100: Tranche = {
  ...fundingOrderUpfront100Data,
  sign: 1,
  principal: 1200,
  payorId: 'fabrizioAccount',
  payeeId: 'doMazyAccount'
}

export const fundingOrderCredit100Data: TrancheData = {
  id: 'fundingOrderCredit100',
  name: 'Credit',
  orderId: 'fundingOrder',
  portion: -1,
  paymentTerms: { primaryPriority: 'credit' }
}
export const fundingOrderCredit100: Tranche = {
  ...fundingOrderCredit100Data,
  sign: -1,
  principal: 1200,
  payorId: 'doMazyAccount',
  payeeId: 'fabrizioAccount'
}

export const tranchesForFundingOrder: Tranche[] = [fundingOrderUpfront100, fundingOrderCredit100]

// donationOrder
export const donationOrder100Data: TrancheData = {
  id: 'donationOrder100',
  name: 'Donation',
  orderId: 'donationOrder',
  portion: 1,
  paymentTerms: { primaryPriority: 'firm' }
}

export const donationOrder100: Tranche = {
  ...donationOrder100Data,
  sign: 1,
  principal: 100,
  payorId: 'pizzaDOroAccount',
  payeeId: 'pizzaDOroTakeAwayAccount'
}

export const trancheDatas: TrancheData[] = [
  commercialOrderPreferred50Data,
  commercialOrderFlex30Data,
  commercialOrderCredit30interestData,
  orderWithRebateUpfront150Data,
  orderWithRebateFlexRebate50Data,
  orderWithNoItemsFirm100Data,
  fundingOrderUpfront100Data,
  fundingOrderCredit100Data,
  donationOrder100Data
]
export const tranches: Tranche[] = [
  commercialOrderPreferred50,
  commercialOrderFlex30,
  commercialOrderCredit30interest,
  orderWithRebateUpfront150,
  orderWithRebateFlexRebate50,
  orderWithNoItemsFirm100,
  fundingOrderUpfront100,
  fundingOrderCredit100,
  donationOrder100
]
