import axios from 'axios'

import { config } from 'dotenv'
config() // load variables from .env into process.env
const DB_URL = process.env.DB_URL || 'http://127.0.0.1:3057'

export default async () => {
  const { data } = await axios(`${DB_URL}/account`)
  return data
}
