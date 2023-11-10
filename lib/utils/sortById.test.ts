import type { Entity } from 'lib/entities'
import { sortById } from './sortById'

const unsortedEntities = [
  { id: '3', name: 'Entity 3' },
  { id: '1', name: 'Entity 1' },
  { id: '2', name: 'Entity 2' }
]

const sortedEntities = [
  { id: '1', name: 'Entity 1' },
  { id: '2', name: 'Entity 2' },
  { id: '3', name: 'Entity 3' }
]
const entitiesWithSameIds = [
  { id: '1', name: 'Entity 1' },
  { id: '1', name: 'Entity 2' },
  { id: '2', name: 'Entity 3' }
]
describe('sortById', () => {
  it('should sort entities by id in ascending order', () => {
    const result = sortById(unsortedEntities)
    const expected = sortedEntities
    expect(result).toEqual(expected)
  })
  it('should not change the order of entities with the same id', () => {
    const result = sortById(entitiesWithSameIds)
    const expected = entitiesWithSameIds
    expect(result).toEqual(expected)
  })
  it('should handle empty array', () => {
    expect(sortById([])).toEqual([])
  })
  it('should handle single element array', () => {
    const singleEntity = [{ id: '1', name: 'Entity 1' }]
    expect(sortById(singleEntity)).toEqual(singleEntity)
  })
  it('should throw an error for non-array input', () => {
    expect(() => sortById('not an array' as unknown as Entity[])).toThrow()
  })

  it('should throw an error for elements without id', () => {
    const entities = [{ name: 'Entity 1' }, { name: 'Entity 2' }]
    expect(() => sortById(entities as unknown as Entity[])).toThrowError()
  })

  it('should throw an error for non-string id', () => {
    const entities = [
      { id: 1, name: 'Entity 1' },
      { id: 2, name: 'Entity 2' }
    ]
    expect(() => sortById(entities as unknown as Entity[])).toThrow()
  })
})
