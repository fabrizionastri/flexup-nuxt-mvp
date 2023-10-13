import { getAccounts } from './getResource.js'

// Option 1 -  import the default export, and then extract accounts from it 👌✔️  works
// import inMemory from '../../mock/inMemory'
// const accounts = inMemory.accounts

// Option 2 - import accountDatas directly 👌✔️ works
// import { accountDatas as accounts } from '../../mock/inMemory'

// Option 3 - import accounts directly from json file in '../../mock/index.json' 👌✔️ works
// import db from '../../mock/index.json' // 👌✔️ works
// import db from '../../mock/index' // 👌✔️ works
// import db from '../../mock/' // 👌✔️ works
// import db from '../../mock' // 👌✔️ works
import db from 'mock' // 👌✔️ works -> use this as it's the shortest 😊🎉😎
const accounts = db.account

describe('getAccounts -> real access to server', () => {
  // console.log('accounts:', accounts)

  it('should return full accounts list when no arguments are provided', async () => {
    const assertion = await getAccounts()
    const result = accounts
    expect(assertion).toEqual(result)
  })

  it('should return an account when the id is provided', async () => {
    const assertion = await getAccounts('id', 'account1')
    const result = accounts.slice(0, 1)
    expect(assertion).toEqual(result)
  })

  it('should return an account when the name is provided', async () => {
    const assertion = await getAccounts('name', 'FlexUp')
    // console.log('assertion:', assertion)
    const result = accounts.slice(0, 1)
    expect(assertion).toEqual(result)
  })

  it('should be true', () => {
    expect(true).toBe(true)
  })
})
