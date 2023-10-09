// import db from 'mock/cars.json'
// import db from 'mock/jsonServer.json'
import { accountDatas } from '../../mock/inMemory'

export const getDb = () => {
  // console.log('mock db: ', accountDatas)
  return accountDatas
}

export default getDb
