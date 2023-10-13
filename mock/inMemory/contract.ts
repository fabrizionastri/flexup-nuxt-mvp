import { Contract } from 'entities/contract'

export const contractsDB: Contract[] = [
  {
    id: 'contract1',
    clientId: 'Fabrizio',
    supplierId: 'Fred',
    nature: 'commercial',
    currency: 'EUR'
  },
  {
    id: 'contract2',
    clientId: 'Fabrizio',
    supplierId: 'Toto',
    nature: 'commercial',
    currency: 'USD'
  },
  {
    id: 'contract3',
    clientId: 'Fabrizio',
    supplierId: 'Fred',
    nature: 'funding',
    currency: 'GBP'
  },
  {
    id: 'contract4',
    clientId: 'Fabrizio',
    supplierId: 'Toto',
    nature: 'commercial',
    currency: 'EUR'
  },
  {
    id: 'contract5',
    clientId: 'Plop',
    supplierId: 'Fred',
    nature: 'donation',
    currency: 'EUR'
  }
]
