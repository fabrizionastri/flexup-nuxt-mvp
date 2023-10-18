import { Tranche, TrancheData } from 'entities/tranche'

// Tranche raw data
export const commercialOrderPreferred50Data: TrancheData = {
  id: 'commercialOrderPreferred50Data',
  name: '50% preferred',
  orderId: 'commercialOrder',
  portion: 0.5,
  paymentTerms: { main: { priority: 'preferred' } }
}
export const commercialOrderFlex30Data: TrancheData = {
  id: 'commercialOrderFlex30Data',
  name: '30% flex',
  orderId: 'commercialOrder',
  portion: 0.3,
  paymentTerms: { main: { priority: 'flex' } }
}
export const commercialOrderCredit30interestData: TrancheData = {
  id: 'commercialOrderCredit30interestData',
  name: '20% credit 5%',
  orderId: 'commercialOrder',
  portion: 0.2,
  paymentTerms: {
    main: { priority: 'credit' },
    interest: {
      rate: 0.05,
      priority: 'credit',
      start: 'deferral',
      period: 'sameAsMain'
    }
  }
}
export const orderWithRebateUpfront150Data: TrancheData = {
  id: 'orderWithRebateUpfront150Data',
  orderId: 'orderWithRebate',
  portion: 1.5,
  name: '150% upfront price',
  paymentTerms: { main: { priority: 'firm' } }
}
export const orderWithRebateFlexRebate50Data: TrancheData = {
  id: 'orderWithRebateFlexRebate50Data',
  name: '50% flex rebate (in a year)',
  orderId: 'orderWithRebate',
  portion: -0.5,
  paymentTerms: { main: { priority: 'flex', period: 'year' } }
}
export const fundingOrderUpfront100Data: TrancheData = {
  id: 'fundingOrderUpfront100',
  name: 'Funding',
  orderId: 'fundingOrder',
  portion: 1,
  paymentTerms: { main: { priority: 'firm' } }
}
export const fundingOrderCredit100Data: TrancheData = {
  id: 'fundingOrderCredit100',
  name: 'Credit',
  orderId: 'fundingOrder',
  portion: -1,
  paymentTerms: { main: { priority: 'credit' } }
}
export const donationOrder100Data: TrancheData = {
  id: 'donationOrder100',
  name: 'Donation',
  orderId: 'donationOrder',
  portion: 1,
  paymentTerms: { main: { priority: 'firm' } }
}

export const trancheDatas: TrancheData[] = [
  commercialOrderPreferred50Data,
  commercialOrderFlex30Data,
  commercialOrderCredit30interestData,
  orderWithRebateUpfront150Data,
  orderWithRebateFlexRebate50Data,
  fundingOrderUpfront100Data,
  fundingOrderCredit100Data,
  donationOrder100Data
]

// Computed tranches

export const commercialOrderPreferred50: Tranche = {
  ...commercialOrderPreferred50Data,
  sign: 1,
  principal: 126.55,
  payorId: 'pizzaDOroAccount',
  payeeId: 'flexupAccount'
}
export const commercialOrderWithRebateFlex30: Tranche = {
  ...commercialOrderFlex30Data,
  sign: 1,
  principal: 75.93,
  payorId: 'pizzaDOroAccount',
  payeeId: 'flexupAccount'
}
export const commercialOrderCredit30interest5: Tranche = {
  ...commercialOrderCredit30interestData,
  sign: 1,
  principal: 50.62,
  payorId: 'pizzaDOroAccount',
  payeeId: 'flexupAccount'
}
export const orderWithRebateUpfront150: Tranche = {
  ...orderWithRebateUpfront150Data,
  sign: 1,
  principal: 248.4,
  payorId: 'pizzaDOro',
  payeeId: 'flexup'
}
export const orderWithRebateFlexRebate50: Tranche = {
  ...orderWithRebateFlexRebate50Data,
  sign: -1,
  principal: 82.8,
  payorId: 'flexup',
  payeeId: 'pizzaDOro'
}
export const fundingOrderUpfront100: Tranche = {
  ...fundingOrderUpfront100Data,
  sign: 1,
  principal: 1000,
  payorId: 'fabrizioAccount',
  payeeId: 'domMazy'
}
export const fundingOrderCredit100: Tranche = {
  ...fundingOrderCredit100Data,
  sign: -1,
  principal: 1000,
  payorId: 'domMazy',
  payeeId: 'fabrizioAccount'
}
export const donationOrder100: Tranche = {
  ...donationOrder100Data,
  sign: 1,
  principal: 100,
  payorId: 'poulaillerMobile',
  payeeId: 'pizzaDOroTakeAway'
}

export const tranches: Tranche[] = [
  commercialOrderPreferred50,
  commercialOrderWithRebateFlex30,
  commercialOrderCredit30interest5,
  orderWithRebateUpfront150,
  orderWithRebateFlexRebate50,
  fundingOrderUpfront100,
  fundingOrderCredit100,
  donationOrder100
]

export const trancheDatasForcommercialOrder: TrancheData[] = [
  commercialOrderPreferred50Data,
  commercialOrderFlex30Data,
  commercialOrderCredit30interestData
]

export const tranchesForcommercialOrder: Tranche[] = [
  commercialOrderPreferred50,
  commercialOrderWithRebateFlex30,
  commercialOrderCredit30interest5
]

export const tranchesForOrderWithRebate: Tranche[] = [
  orderWithRebateUpfront150,
  orderWithRebateFlexRebate50
]
