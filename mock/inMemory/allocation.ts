import { AllocationInstance } from 'entities/allocation'

export const allocation1: AllocationInstance = {
  accountId: '1234',
  referenceDate: new Date('2023-03-14'),
  source: 'liquidity',
  destination: 'payable',
  allocation: 5
}

export const allocation2: AllocationInstance = {
  accountId: '1234',
  referenceDate: new Date('2023-03-14'),
  source: 'flex',
  destination: 'liquidity',
  allocation: 15
}

export const allocation3: AllocationInstance = {
  accountId: '2345',
  referenceDate: new Date('2023-03-14'),
  source: 'flex',
  destination: 'liquidity',
  allocation: 10
}

export const allocations: AllocationInstance[] = [
  allocation1,
  allocation2,
  allocation3
]
