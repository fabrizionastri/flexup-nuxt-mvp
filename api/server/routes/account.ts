import { getAccounts } from 'usecases/getAccounts'
import { Hono } from 'hono'
import { jwtMiddleware } from '../middleware/jwtMiddleware'
import type { AccountStatus } from 'lib/entities'

const app = new Hono()

app.get('/', jwtMiddleware, async (c) => {
  const userId = c['jwtPayload'].userId
  const queryStatuses = c.req.query('status')
  const statuses = queryStatuses ? (queryStatuses.split(',') as AccountStatus[]) : []
  const accounts = await getAccounts(userId, statuses)
  // console.log('api/server/routes/account.ts - accounts:', accounts)
  return c.json(accounts)
})

export default app
