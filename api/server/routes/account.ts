import { getAllOrders } from 'usecases/getAllOrders'
import { Hono } from 'hono'

const app = new Hono()

app.get('/:accountd', async (c) => {
  const accountId = c.req.param('accountd')
  console.log('req path', c.req.path)
  console.log('Hono: process.env.STORAGE_TYPE', process.env.STORAGE_TYPE)
  const orders = await getAllOrders(accountId)
  // console.log('orders', JSON.stringify(orders, null, 2))
  return c.json(orders)
})

export default app
