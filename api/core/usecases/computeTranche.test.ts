import { computeTranche } from './computeTranche'
import { allOrderDatas, trancheDatas, tranches } from 'mock/inMemory'

describe('computeTranche', () => {
  it('should return a computed tranche if matching order and trancheData are provided', () => {
    const order = orderDatas[0] // or orders?
    const trancheData = trancheDatas[0]
    expect(computeTranche(trancheData, order)).toMatchObject(tranches[0])
  })
  it('should return a computed tranched with negative sign', () => {
    const order = orderDatas[1] // or orders?
    const trancheData = trancheDatas[4]
    expect(computeTranche(trancheData, order)).toMatchObject(tranches[4])
  })
})
