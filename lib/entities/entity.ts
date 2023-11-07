import inMemory from 'mock/inMemory'

export type Entity = {
  id: string
  [key: string]: unknown
}

// entity names are the keys of the inMemory object
export type EntityName = keyof typeof inMemory
