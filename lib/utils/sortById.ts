import type { Entity } from '../entities/entity'

// this function is mainly used for testing purposes, to ensure that the tests recognised that two objects or arrays are equal even if their contents are in a different order
export const sortById = (myArray: Entity[]): Entity[] => {
  if (!Array.isArray(myArray)) throw new Error('sortById: Argument provided is not an array')
  if (myArray.length < 2) return myArray
  if (!myArray.every((item) => item.id))
    throw new Error('sortById: Some elements of the array are not objects with an id property')
  return myArray.sort((a, b) => a.id.localeCompare(b.id))
}
