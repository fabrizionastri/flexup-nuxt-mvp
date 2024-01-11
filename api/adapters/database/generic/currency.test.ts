import { euroCurrency } from 'mock/inMemory/currency'
import { currencyAdapter } from './currency'

describe('currency adapter', () => {
  describe('getById', () => {
    it('should return an currency data for existing currency Id', async () => {
      const result = await currencyAdapter.getById('EUR')
      const expected = euroCurrency
      expect(result).toEqual(expected)
    })
    it('should return undefined for inexistant currency Id', async () => {
      const result = await currencyAdapter.getById('inexistantCurrency')
      expect(result).toBeUndefined()
    })
  })
})
