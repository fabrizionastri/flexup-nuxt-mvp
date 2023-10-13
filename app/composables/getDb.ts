import db from 'mock/cars'
// import db from 'mock/jsonServer.json'
// import cars from './cars.json'

// import { accountDatas } from '../../mock/inMemory'
// import { accountDatas } from './inMemory'

export const getDb = () => {
  console.log('mock db: ', db)
  // return accountDatas
  return 'getDb'
}

export default getDb
