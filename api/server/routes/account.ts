import { getAllAccounts } from 'usecases/getAllAccounts'
import { Hono } from 'hono'
import { jwtMiddleware } from '../middleware/jwtMiddleware'

const app = new Hono()

app.get('/account/all', jwtMiddleware, async (c) => {
  // const accountId = c.req.param('accountId')
  // console.log('req path', c.req.path)
  // console.log('Hono: process.env.STORAGE_TYPE', process.env.STORAGE_TYPE)
  const accounts = await getAllAccounts(c['userId'])
  // console.log('orders', JSON.stringify(orders, null, 2))
  return c.json(accounts)
})

export default app
