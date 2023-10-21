import { getAccounts } from './getResource'

// Option 1 -  import the default export, and then extract accounts from it 👌✔️  works
// import inMemory from '../../mock/inMemory'
// const accounts = im.accounts

// Option 2 - import accountDatas directly 👌✔️ works
// import { accountDatas as accounts } from '../../mock/inMemory'

// Option 3 - import accounts directly from json file in '../../mock/index.json' 👌✔️ works
// import db from '../../mock/index.json' // 👌✔️ works
// import db from '../../mock/index' // 👌✔️ works
// import db from '../../mock/' // 👌✔️ works
// import db from '../../mock' // 👌✔️ works

// import db from 'mock/jsonServer' // 👌✔️ works -> use this as it's the shortest 😊🎉😎
import db from 'mock/inMemory'

describe('getAccounts -> real access to server', () => {
  it('should return full accounts list when no arguments are provided', async () => {
    const accounts = db.account
    const result = await getAccounts()
    const expected = accounts
    expect(result).toEqual(expected)
  })

  //   it('should return an account when the id is provided', async () => {
  //     const assertion = await getAccounts('id', 'cosysAccount')
  //     const result = accounts.slice(0, 1)
  //     expect(assertion).toEqual(result)
  //   })
  //
  //   it('should return an account when the name is provided', async () => {
  //     const assertion = await getAccounts('name', 'FlexUp')
  //     // console.log('assertion:', assertion)
  //     const result = accounts.slice(0, 1)
  //     expect(assertion).toEqual(result)
  //   })
})
