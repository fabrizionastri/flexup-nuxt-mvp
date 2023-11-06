import { Hono } from 'hono'
import { login } from 'api/usecases'

const app = new Hono()

app.post('/login', async (c) => {
  const { identifier, password } = await c.req.json()
  const user = await login(identifier, password)
  return c.json(user)
})

export default app
