import { userGateway } from 'gateways/user'
import { Hono } from 'hono'
import jwt from 'jsonwebtoken'

import { config } from 'dotenv'
import { jwtMiddleware } from '../middleware/jwtMiddleware'

config()
const privateKey = process.env.JWT_SECRET_KEY || 'default_private_key'
// console.log('api/server/routes/user - privateKey:', privateKey)

const app = new Hono()

// console.log('api/server/routes/user - privateKey:', privateKey)

// login route to authenticate user and return a JWT token
app.post('/login', async (c) => {
  const { identifier, password } = await c.req.json()
  const user = await userGateway.login(identifier, password)
  if (user && user.id) {
    const token = jwt.sign({ userId: user.id }, privateKey, { expiresIn: '7d' })
    // console.log('api/server/routes/user - token:', token)
    return c.json({ token })
  } else {
    return c.json({ message: 'Authentication failed' }, 401)
  }
})

// route to get the user information
app.get('/', jwtMiddleware, async (c) => {
  const userId = c['jwtPayload'].userId
  const user = await userGateway.getById(userId)
  return c.json(user)
})

export default app
