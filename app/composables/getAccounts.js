import axios from 'axios'
// const API_URL = process.env.API_URL || 'http://127.0.0.1:8787' // ceci ne fonctionne pas
const API_URL = 'http://127.0.0.1:8787'

export const getAccounts = async (prop = '', value = '') => {
  const url = `${API_URL}/account`
  // console.log('process.env:', process.env.API_URL)
  // console.log('Vue → fetchOrders → url', url)
  // try {
  const { data } = await axios.get(url)
  // console.log('OK')
  // console.log('Vue → getAccounts : data =', data)
  if (!prop) return data
  return data.filter((account) => account[prop] === value)
  // } catch (error) {
  //   console.log('Not OK')
  //   console.error(error)
  // }
}

//
// export const accountList = [
//   {
//     id: 1,
//     name: 'FlexUp',
//     type: 'Activity',
//     icon: '/images/profiles/flexup.svg'
//   },
//   {
//     id: 2,
//     name: "Pizza d'Oro",
//     type: 'Business',
//     icon: '/images/profiles/pizza_d_oro.png'
//   },
//   {
//     id: 3,
//     name: 'Fabrizio Nastri',
//     type: 'Personal',
//     icon: '/images/profiles/fabrizio_nastri.jpeg'
//   },
//   {
//     id: 4,
//     name: 'Frédéric Lasnier',
//     type: 'Personal',
//     icon: '/images/profiles/fred.png'
//   }
// ]
//
// export const getAccounts = (prop = '', value = '') => {
//   if (!prop) return accountList
//   // returns an array of accounts that match the prop and value
//   return accountList.filter((account) => account[prop] === value)
// }

export default getAccounts
