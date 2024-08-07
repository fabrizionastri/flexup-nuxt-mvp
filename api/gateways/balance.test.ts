import { balanceInstanceAll } from 'mock/inMemory/balance'

describe.todo('Balance core gateway', () => {
  it('should throw an error if adapter is null', () => {
    // @ts-expect-error: Testing behavior when adapter is not defined
    expect(balanceGateway()).toThrowError('BalanceAdapter is not defined')
  })

  describe('when adapter is defined', () => {
    let gateway: any
    beforeEach(() => {
      const balanceAdapter = new BalanceAdapter()
      balanceAdapter.feedWith(balanceInstanceAll)
      gateway = balanceGateway(balanceAdapter)
    })
    it('should return all 100 for account 1234 and Jan', () => {
      const accountId = '1234'
      const referenceDate = new Date('2020-01-01T00:00:00.000Z')
      const expected = {
        liquidity: 100,
        flex: 100,
        base: 100,
        strategic: 100,
        payable: 100,
        allotment: 100,
        creditBuyback: 100,
        tokenBuyback: 100,
        distribution: 100,
        endowment: 100
      }
      expect(gateway(accountId, referenceDate)).toEqual(expected)
    })
    it('should return all 125 * 3 for account 2345 and Jan', () => {
      const accountId = '2345'
      const referenceDate = new Date('2020-01-01T00:00:00.000Z')
      const expected = {
        liquidity: 125,
        base: 125,
        flex: 125
      }
      expect(gateway(accountId, referenceDate)).toEqual(expected)
    })
    it('should return all 150 * 2 for account 2345 and Feb, and 125 for Jan', () => {
      const accountId = '2345'
      const referenceDate = new Date('2020-02-01T00:00:00.000Z')
      const expected = {
        liquidity: 125,
        flex: 150,
        base: 150
      }
      expect(gateway(accountId, referenceDate)).toEqual(expected)
    })
    it('should throw an duplication error for March ', () => {
      const accountId = '2345'
      const referenceDate = new Date('2020-03-01T00:00:00.000Z')
      expect(() => gateway(accountId, referenceDate)).toThrowError(
        'Found two difference balances values for same reserve on same date'
      )
    })
  })
})
