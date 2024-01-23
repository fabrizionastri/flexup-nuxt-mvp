// lib/factories/createTranche.test.ts

import {
  calculatePrincipal,
  calculateSign,
  createTranche,
  calculatePayeeId,
  calculatePayorId,
  calculateName
} from './tranche'
import type { TrancheData, Order } from 'lib/entities'

describe('tranche', () => {
  describe('tranche methods / functions', () => {
    const clientAccountId = 'client123'
    const supplierAccountId = 'supplier456'
    const paymentTermsName = 'Firm (simple)'
    describe('calculateSign', () => {
      it('should return 1 for positive portions', () => {
        expect(calculateSign(0.5)).toBe(1)
      })

      it('should return -1 for negative portions', () => {
        expect(calculateSign(-0.5)).toBe(-1)
      })
    })

    describe('calculatePrincipal', () => {
      it('should calculate the principal correctly', () => {
        expect(calculatePrincipal(0.5, 1000)).toBe(500)
      })

      it('should return undefined if amountExclTax is not provided', () => {
        expect(calculatePrincipal(0.5, undefined)).toBeUndefined()
      })
    })

    describe('determinePayorId', () => {
      it('should return clientAccountId when portion is greater than 0', () => {
        const portion = 0.5
        expect(calculatePayorId(portion, clientAccountId, supplierAccountId)).toBe(clientAccountId)
      })

      it('should throw error when portion is 0', () => {
        const portion = 0
        expect(() => calculatePayorId(portion, clientAccountId, supplierAccountId)).toThrow()
      })
    })

    describe('determinePayeeId', () => {
      it('should return supplierAccountId when portion is greater than 0', () => {
        const portion = 0.5
        expect(calculatePayeeId(portion, clientAccountId, supplierAccountId)).toBe(
          supplierAccountId
        )
      })

      it('should throw error when portion is undefined', () => {
        const portion = 0
        expect(() => calculatePayeeId(portion, clientAccountId, supplierAccountId)).toThrowError()
      })
    })

    describe('generateName', () => {
      it('should return a string with the portion as a percentage and the payment terms name', () => {
        const portion = 0.5
        expect(calculateName(portion, paymentTermsName)).toBe('50% Firm (simple)')
      })
    })
  })
  describe('createTranche', () => {
    const mockOrder: Order = {
      id: 'order1',
      clientAccountId: 'client123',
      supplierAccountId: 'supplier123',
      nature: 'commercial',
      grossAmount: 1000
      // ... other Order properties
    }
    const mockTrancheData: TrancheData = {
      id: 'tranche1',
      orderId: 'order123',
      portion: 0.5,
      paymentTerms: { primaryPriority: 'flex', name: 'Flex (simple)' }
      // ... other TrancheData properties
    }
    describe('positive portion', () => {
      const tranche = createTranche(mockTrancheData, mockOrder)

      it('returns a tranche object with the correct structure', () => {
        expect(tranche).toHaveProperty('id', 'tranche1')
        expect(tranche).toHaveProperty('orderId', 'order123')
        // ... other property checks
      })

      it('correctly calculates the sign', () => {
        expect(tranche.sign()).toBe(1) // Assuming portion is positive
      })

      it('correctly calculates the principal', () => {
        expect(tranche.principal()).toBe(500) // 0.5 * 1000
      })

      it('correctly assigns payor and payee IDs', () => {
        expect(tranche.payorId()).toBe('client123') // portion > 0
        expect(tranche.payeeId()).toBe('supplier123') // portion > 0
      })

      it('constructs the correct name', () => {
        expect(tranche.name()).toBe('50% Flex (simple)')
      })
    })

    describe('negative portion', () => {
      const mockTrancheData2: TrancheData = {
        ...mockTrancheData,
        portion: -0.3
      }
      const tranche = createTranche(mockTrancheData2, mockOrder)

      it('should calculate correctly all values', () => {
        expect(tranche.sign()).toBe(-1) // Assuming portion is negative
        expect(tranche.payorId()).toBe('supplier123') // portion < 0
        expect(tranche.payeeId()).toBe('client123') // portion < 0
        expect(tranche.name()).toBe('-30% Flex (simple)')
        // principal
        expect(tranche.principal()).toBe(-300) // -0.3 * 1000
      })
    })

    describe('undefined order amountExclTax', () => {
      const mockOrder2: Order = {
        ...mockOrder,
        grossAmount: undefined
      }
      const tranche = createTranche(mockTrancheData, mockOrder2)

      it('should return undefined for principal', () => {
        expect(tranche.principal()).toBeUndefined()
      })
    })
  })
})
