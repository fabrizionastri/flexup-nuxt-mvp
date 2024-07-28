// api/server/index.ts

import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { config } from 'dotenv'
import { HTTPException } from 'hono/http-exception'
// IMPORT ROUTES
import account from './routes/account'
import user from './routes/user'

// Load environment variables from .env file, where API keys and passwords are configured
config() // load variables from .env into process.env
const API_PORT = process.env.API_PORT || '8787'
const jsonServerUrl = process.env.JSON_SERVER_URL || 'http://localhost:3057/'

import axios from 'axios'
// TODO : I should eliminate CustomError and use HTTPException instead
import { CustomError } from '../error'
const app = new Hono()
app.use('*', cors())

// Error handling middleware
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    console.error(`► api/server/index.ts → HTTPException ${err.status}: ${err.message}`)
    return c.json({ error: err.message }, err.status)
  } else if (err instanceof CustomError) {
    console.error(`► api/server/index.ts → CustomError ${err.statusCode}: ${err.message}`)
    return c.json({ error: err.message }, err.statusCode)
  } else {
    //   // Handle other types of errors or pass them to some other error handler
    console.error('► api/server/index.ts → Unhandled error:', err)
    return c.json({ error: 'Invalid identifier' }, 401)
  }
})

// ROUTES
app.route('/account', account)
app.route('/user', user)

// ROUTES
app.post('/db/:selectedDb', async (c) => {
  const selectedDb: string = c.req.param('selectedDb')
  console.log('req path', c.req.path)
  console.log('Hono: POST Request → selectedDb', selectedDb)
  process.env.STORAGE_TYPE = selectedDb
  console.log('Hono: process.env.STORAGE_TYPE', process.env.STORAGE_TYPE)
  return c.text(selectedDb)
})

app.get('/fab', (c) => c.text('Hello Fabrizio!'))
app.get('/', (c) => c.text('Hello Hono Fabrizio!'))
app.get('/favicon.ico', (c) => c.text(`Sorry, we don't send favicon in this app for now`))

// TEMPORARY - I'm cheating here and bypassing the adatpters and core
app.get('/resources/:resource', async (c) => {
  const resource = c.req.param('resource')
  const query = c.req.query()
  // console.log('query', Object.entries(query)[0])
  const property = Object.keys(query)[0]
  const value = Object.values(query)[0]
  // console.log('Hono resources requested for:', resource, property, value)
  let url = `${jsonServerUrl}/${resource}`
  if (property && value) {
    url = `${url}?${property}=${value}`
  }
  // console.log('url', url)
  return c.json((await axios.get(url)).data)
  // return c.text(`url = ${url}`)
})

console.log(`Hono server listening on PORT http://localhost:${API_PORT}`)

serve({
  fetch: app.fetch,
  port: API_PORT
})
// serve(app)
