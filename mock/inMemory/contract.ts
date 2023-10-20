import { Contract } from 'entities/contract'

export const contractsDB: Contract[] = [
  {
    id: 'contract1',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Fred',
    nature: 'commercial',
    currencyId: 'EUR'
  },
  {
    id: 'contract2',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Toto',
    nature: 'commercial',
    currencyId: 'USD'
  },
  {
    id: 'contract3',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Fred',
    nature: 'funding',
    currencyId: 'GBP'
  },
  {
    id: 'contract4',
    clientAccountId: 'Fabrizio',
    supplierAccountId: 'Toto',
    nature: 'commercial',
    currencyId: 'EUR'
  },
  {
    id: 'contract5',
    clientAccountId: 'Plop',
    supplierAccountId: 'Fred',
    nature: 'donation',
    currencyId: 'EUR'
  }
]
