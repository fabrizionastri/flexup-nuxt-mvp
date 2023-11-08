import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
const privateKey = process.env.JWT_SECRET_KEY

export const jwtMiddleware = async (c, next) => {
  const authHeader = c.req.headers.get('Authorization')
  if (!authHeader) {
    return c.json({ error: 'No authorization header provided' }, 401)
  }
  const token = authHeader.split(' ')[1] // Bearer <token>
  if (!token) {
    return c.json({ error: 'No token provided' }, 401)
  }
  try {
    const jwtPayload = jwt.verify(token, privateKey)
    c['jwtPayload'] = jwtPayload
    await next()
  } catch (error) {
    return c.json({ error: 'Invalid token' }, 401)
  }
}
