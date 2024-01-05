// lib/devUtils/resetJsonServer.ts

/*
This script resets the json-server index.json file based on the inMemory data
*/

import fs from 'fs'
import inMemory from '../../mock/inMemory'

export const resetJsonServer = () => {
  const json = JSON.stringify(inMemory, null, 2)
  const destination = 'mock/jsonServer/index.json'
  fs.writeFile(destination, json, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('mock/json-server/index.json file created successfully from inMemory data')
  })
}

resetJsonServer()
