import { userGateway } from 'gateways/user'
import { Hono } from 'hono'
import jwt from 'jsonwebtoken'

import { config } from 'dotenv'

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
app.get('/', async (c) => {
  const authHeader = c.req.headers.get('Authorization')
  if (!authHeader) {
    return c.json({ message: 'No authorization header provided' }, 401)
  }
  const token = authHeader.split(' ')[1] // Bearer <token>
  try {
    const decoded = jwt.verify(token, privateKey) as jwt.JwtPayload
    console.log('api/server/routes/user - decoded:', decoded)
    if (decoded && decoded.userId) {
      const user = await userGateway.getById(decoded.userId)
      console.log('api/server/routes/user - user:', user)
      return c.json(user)
    } else {
      return c.json({ message: 'Token verification failed' }, 401)
    }
  } catch (error) {
    return c.json({ message: 'Invalid token' }, 401)
  }
})

export default app
