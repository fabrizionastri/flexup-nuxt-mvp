import { round6 } from 'lib/utils/round'
import * as orders from 'mock/inMemory/order'
import * as items from 'mock/inMemory/item'
import type { OrderGateway } from '.'
import { computeOrder, computeItemTotals, createOrderGateway } from '.'

describe('orderGateway', () => {
  let orderGateway: OrderGateway

  describe('computeItemTotals', () => {
    it('should compute the correct amounts for items of commercial order', () => {
      const result = computeItemTotals(items.itemsForCommercialOrder)
      expect(result).toBeDefined()
      expect(result!.amountExclTax).toBe(
        items.commercialOrderItem1.amountExclTax + items.commercialOrderItem2.amountExclTax
      )
      expect(result!.amountInclTax).toBe(
        items.commercialOrderItem1.amountInclTax + items.commercialOrderItem2.amountInclTax
      )
      expect(result!.taxAmount).toBe(
        items.commercialOrderItem1.taxAmount + items.commercialOrderItem2.taxAmount
      )
      expect(result!.averageTaxRate).toBe(
        round6(
          (items.commercialOrderItem1.taxAmount + items.commercialOrderItem2.taxAmount) /
            (items.commercialOrderItem1.amountExclTax + items.commercialOrderItem2.amountExclTax)
        )
      )
    })
    it('should return undefined for order with no items', () => {
      const result = computeItemTotals([])
      expect(result).toBeUndefined()
    })
    it('should return undefined if any amount is null or undefined', () => {
      const testItems = [
        {
          ...items.commercialOrderItem1,
          amountExclTax: null
        },
        items.commercialOrderItem2
      ]
      const result = computeItemTotals(testItems)
      expect(result).toBeUndefined()
    })
    it('should return undefined if the sum of any amount is 0', () => {
      const testItems = [
        {
          ...items.commercialOrderItem1,
          amountExclTax: 0
        },
        {
          ...items.commercialOrderItem2,
          amountExclTax: 0
        }
      ]
      const result = computeItemTotals(testItems)

      expect(result).toBeUndefined()
    })

    // Add more test scenarios as needed.
  })
  describe('computeOrder', () => {
    it('orderWithNoTranches - should compute order with items only', async () => {
      const result = await computeOrder(orders.orderWithNoTranchesData)
      expect(result).toEqual(orders.orderWithNoTranches)
    })
    it('orderWithNoItems - should compute order with tranches only', async () => {
      const result = await computeOrder(orders.orderWithNoItemsData)
      expect(result).toEqual(orders.orderWithNoItems)
    })
    it('orderWithNoTranches - should compute order with tranches only', async () => {
      const result = await computeOrder(orders.orderWithNoTranchesData)
      expect(result).toEqual(orders.orderWithNoTranches)
    })
    it('commercialOrder should compute order with items and tranches', async () => {
      const result = await computeOrder(orders.commercialOrderData)
      expect(result).toEqual(orders.commercialOrder)
    })
  })
  describe('createOrderGateway', () => {
    describe('pizzaDOroTakeAwayAccount - for existing account with single donation order', () => {
      beforeEach(async () => {
        orderGateway = createOrderGateway('pizzaDOroTakeAwayAccount')
      })
      it('getById should return the fully computed order', async () => {
        const result = await orderGateway.getById('donationOrder')
        expect(result).toEqual(orders.donationOrder)
      })
      it('getAll should return all fully computed order for this account', async () => {
        const result = await orderGateway.getAll()
        expect(result).toEqual([orders.donationOrder])
      })
    })

    describe('for inexisting account', () => {
      beforeEach(async () => {
        orderGateway = createOrderGateway('account99')
      })
      it('getById should return undefined', async () => {
        const result = await orderGateway.getById('commercialOrder')
        expect(result).toBeUndefined()
      })
      it('getAll should return all []', async () => {
        const result = await orderGateway.getAll()
        expect(result).toEqual([])
      })
    })

    describe('pizzaDOroAccount - for existing account with multiple orders', () => {
      beforeEach(async () => {
        orderGateway = createOrderGateway('pizzaDOroAccount')
      })
      it('getById(commercialOrder) should return the fully computed order', async () => {
        const result = await orderGateway.getById('commercialOrder')
        expect(result).toEqual(orders.commercialOrder)
      })
      it('getById(orderWithNoItems) should return the computed order with tranches but no items', async () => {
        const result = await orderGateway.getById('orderWithNoItems')
        expect(result).toEqual(orders.orderWithNoItems)
        it('getAll should return all fully computed order for this account', async () => {
          const result = await orderGateway.getAll()
          expect(result).toEqual([
            orders.commercialOrder,
            orders.donationOrder,
            orders.orderWithNoItems
          ])
        })
      })
    })
    describe('fabrizioAccount - for existing account with multiple orders', () => {
      beforeEach(async () => {
        orderGateway = createOrderGateway('fabrizioAccount')
      })
      it('getById(orderWithNoTranches) should return the computed order with tranches but no items', async () => {
        const result = await orderGateway.getById('orderWithNoTranches')
        expect(result).toEqual(orders.orderWithNoTranches)
      })
    })
  })
})
