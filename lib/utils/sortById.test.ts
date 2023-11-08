import { sortById } from './sortById'

describe('sortById', () => {
  it('should sort entities by id in ascending order', () => {
    // Arrange
    const entities = [
      { id: '3', name: 'Entity 3' },
      { id: '1', name: 'Entity 1' },
      { id: '2', name: 'Entity 2' }
    ]

    const sortedEntities = [
      { id: '1', name: 'Entity 1' },
      { id: '2', name: 'Entity 2' },
      { id: '3', name: 'Entity 3' }
    ]

    // Assert
    expect(sortById(entities)).toEqual(sortedEntities)
  })
  it('should sort entities by id in ascending order', () => {
    // Arrange
    const entities = [
      { id: '9', name: 'Entity 3' },
      { id: '1', name: 'Entity 1' },
      { id: '2', name: 'Entity 2' }
    ]
    // console.log('entities:', entities)
    const sortedEntities = sortById(entities)

    // console.log('sortedEntities:', sortedEntities)

    expect(sortedEntities).toEqual(entities)
  })

  it('using sets instead of sorting arrays', () => {
    // Arrange
    const entities = [
      { id: '3', name: 'Entity 3' },
      { id: '1', name: 'Entity 1' },
      { id: '2', name: 'Entity 2' }
    ]
    const sortedEntities = [
      { id: '1', name: 'Entity 1' },
      { id: '2', name: 'Entity 2' },
      { id: '3', name: 'Entity 3' }
    ]
    const entitiesSet = new Set(entities)
    // console.log('entitiesSet:', entitiesSet)
    const sortedEntitiesSet = new Set(sortedEntities)
    // console.log('sortedEntitiesSet:', sortedEntitiesSet)

    expect(sortedEntitiesSet).toEqual(entitiesSet)
  })
  it('should not change the order of entities with the same id', () => {
    // Arrange
    const entities = [
      { id: '1', name: 'Entity 1' },
      { id: '1', name: 'Entity 2' },
      { id: '2', name: 'Entity 3' }
    ]

    // Act
    const sortedEntities = sortById(entities)

    // Assert
    expect(sortedEntities).toEqual(entities)
  })
})
