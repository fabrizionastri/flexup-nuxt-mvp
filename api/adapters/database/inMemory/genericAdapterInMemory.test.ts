import { createGenericAdapterInMemory } from './genericAdapterInMemory'
import { fabrizioAccountData } from 'mock/inMemory/account'
import { totoData } from 'mock/inMemory/user'

describe('createGenericAdapterInMemory', () => {
  describe('-> account', () => {
    const accountAdapter = createGenericAdapterInMemory('account')
    describe('getById', () => {
      it('should retrieve an entity by its ID', async () => {
        const result = await accountAdapter.getById('fabrizioAccount')
        expect(result).toEqual(fabrizioAccountData)
      })

      it('should return undefined for a non-existent ID', async () => {
        const result = await accountAdapter.getById('nonExistentId')
        expect(result).toBeUndefined()
      })
    })

    describe('getByProperty', () => {
      it('should retrieve entities based on a property and its value', async () => {
        const results = await accountAdapter.getByProperty('ownerType', 'person')

        expect(results).toContain(fabrizioAccountData)
      })

      it('should return an empty array if no entities match the criteria', async () => {
        const results = await accountAdapter.getByProperty('ownerType', 'nonExistentOwnerType')
        expect(results).toEqual([])
      })

      // it('should return an error if not property match the property name provided', async () => {
      //   const results = await accountAdapter.getByProperty(
      //     'nonExistentProperty',
      //     'nonExistentValue'
      //   )
      //   expect(results).toThrowError()
      // })
    })
  })
  describe('-> user', () => {
    const accountAdapter = createGenericAdapterInMemory('user')
    describe('getById', () => {
      it('should retrieve an entity by its ID', async () => {
        const result = await accountAdapter.getById('toto')
        expect(result).toEqual(totoData)
      })
    })

    describe('getByProperty', () => {
      it('should retrieve entities based on a property and its value', async () => {
        const results = await accountAdapter.getByProperty('status', 'pending')
        expect(results).toContain(totoData)
      })
    })
  })
})
