import type { Entity } from '../entities/entity'

export const sortById = (myArray: Entity[]): Entity[] => {
  if (!Array.isArray(myArray)) throw new Error('sortById: Argument provided is not an array')
  if (myArray.length < 2) return myArray
  if (!myArray.every((item) => item.id))
    throw new Error('sortById: Some elements of the array are not objects with an id property')
  return myArray.sort((a, b) => a.id.localeCompare(b.id))
}
