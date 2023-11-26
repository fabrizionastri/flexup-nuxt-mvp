// api/server/routes/account.ts

import { getAccounts } from 'usecases/getAccounts'
import { getOrders } from 'usecases/getOrders'
import { Hono } from 'hono'
import { jwtMiddleware } from '../middleware/jwtMiddleware'
import type { AccountStatus } from 'lib/entities'

const app = new Hono()

app.get('/', jwtMiddleware, async (c) => {
  const userId = c['jwtPayload'].userId
  const queryStatuses = c.req.query('status')
  const statuses = queryStatuses ? (queryStatuses.split(',') as AccountStatus[]) : []
  const accounts = await getAccounts(userId, statuses)
  console.log('api/server/routes/account.ts - accounts:', accounts)
  return c.json(accounts)
})

app.get('/:accountId/order', jwtMiddleware, async (c) => {
  console.log('api/server/routes - GET account/[accountId]/order : accountId =')
  const accountId = c.req.param('accountId')
  console.log('api/server/routes - GET account/[accountId]/order : accountId =', accountId)
  // TODO: add status filter later
  // const queryStatuses = c.req.query('status')
  // const statuses = queryStatuses ? (queryStatuses.split(',') as OrderStatus[]) : []
  const orders = await getOrders(accountId)
  // console.log('api/server/routes - GET account/[accountId]/order', orders)
  return c.json(orders)
})

export default app
