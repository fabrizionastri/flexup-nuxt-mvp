import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { config } from 'dotenv'

// IMPORT ROUTES
import account from './routes/account'

// Load environment variables from .env file, where API keys and passwords are configured
config() // load variables from .env into process.env
const API_PORT = process.env.API_PORT || '8787'
const DB_URL = process.env.DB_URL || 'http://127.0.0.1:3057'

import axios from 'axios'
const app = new Hono()
app.use('*', cors())

// ROUTES
app.route('/account', account)

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
  console.log('Hono resources requested for:', resource, property, value)
  let url = `${DB_URL}/${resource}`
  if (property && value) {
    url = `${url}?${property}=${value}`
  }
  console.log('url', url)
  return c.json((await axios.get(url)).data)
  // return c.text(`url = ${url}`)
})

console.log(`Hono server listening on PORT http://localhost:${API_PORT}`)

serve({
  fetch: app.fetch,
  port: API_PORT
})
// serve(app)
