import type { Entity } from '../entities/entity'

export const sortById = (myArray: Entity[]): Entity[] => {
  return myArray.sort((a, b) => a.id.localeCompare(b.id))
}
