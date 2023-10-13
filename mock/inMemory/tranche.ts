import { Tranche, TrancheData } from 'entities/tranche'

export const trancheDatas: TrancheData[] = [
  {
    id: 't0',
    name: '50% preferred',
    orderId: 'order0',
    portion: 0.5,
    paymentTerms: { main: { priority: 'preferred' } }
  },
  {
    id: 't1',
    name: '30% flex',
    orderId: 'order0',
    portion: 0.3,
    paymentTerms: { main: { priority: 'flex' } }
  },
  {
    id: 't2',
    name: '20% credit 5%',
    orderId: 'order0',
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
  },
  {
    id: 't0',
    orderId: 'order1',
    portion: 1.5,
    name: '150% upfront price',
    paymentTerms: { main: { priority: 'firm' } }
  },
  {
    id: 't1',
    name: '50% flex rebate (in a year)',
    orderId: 'order1',
    portion: -0.5,
    paymentTerms: { main: { priority: 'flex', period: 'year' } }
  },
  {
    id: 't0',
    name: 'Funding',
    orderId: 'order4',
    portion: 1,
    paymentTerms: { main: { priority: 'firm' } }
  },
  {
    id: 't1',
    name: 'Credit',
    orderId: 'order4',
    portion: -1,
    paymentTerms: { main: { priority: 'credit' } }
  },
  {
    id: 't0',
    name: 'Donation',
    orderId: 'order5',
    portion: 1,
    paymentTerms: { main: { priority: 'firm' } }
  }
]

export const tranches: Tranche[] = [
  {
    ...trancheDatas[0],
    sign: 1,
    principal: 132.6,
    payorId: 'account0',
    payeeId: 'account1'
  },
  {
    ...trancheDatas[1],
    sign: 1,
    principal: 79.56,
    payorId: 'account0',
    payeeId: 'account1'
  },
  {
    ...trancheDatas[2],
    sign: 1,
    principal: 53.04,
    payorId: 'account0',
    payeeId: 'account1'
  },
  {
    ...trancheDatas[3],
    sign: 1,
    principal: 248.4,
    payorId: 'account2',
    payeeId: 'account0'
  },
  {
    ...trancheDatas[4],
    sign: -1,
    principal: 82.8,
    payorId: 'account0',
    payeeId: 'account2'
  },
  {
    ...trancheDatas[5],
    sign: 1,
    principal: 1000,
    payorId: 'account3',
    payeeId: 'account4'
  },
  {
    ...trancheDatas[6],
    sign: -1,
    principal: 1000,
    payorId: 'account4',
    payeeId: 'account3'
  },
  {
    ...trancheDatas[7],
    sign: 1,
    principal: 100,
    payorId: 'account5',
    payeeId: 'account6'
  }
]

export const trancheDatasForOrder0 = trancheDatas.slice(0, 3)

export const tranchesForOrder0 = tranches.slice(0, 3)
