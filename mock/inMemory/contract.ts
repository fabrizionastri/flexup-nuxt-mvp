import { Contract } from 'entities/contract'

export const contractsDB: Contract[] = [
  {
    id: 'contract1',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Fred',
    nature: 'commercial',
    currency: 'EUR'
  },
  {
    id: 'contract2',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Toto',
    nature: 'commercial',
    currency: 'USD'
  },
  {
    id: 'contract3',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Fred',
    nature: 'funding',
    currency: 'GBP'
  },
  {
    id: 'contract4',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Toto',
    nature: 'commercial',
    currency: 'EUR'
  },
  {
    id: 'contract5',
    clientAccountId: 'Plop',
    supplierAccountId: 'Fred',
    nature: 'donation',
    currency: 'EUR'
  }
]
