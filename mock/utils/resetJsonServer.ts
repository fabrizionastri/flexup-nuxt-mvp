import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url' // use this to get path to current file path
import inMemory from 'mock/inMemory'

export const resetJsonServer2 = () => {
  const json = JSON.stringify(inMemory, null, 2)
  const dirname = path.dirname(fileURLToPath(import.meta.url))
  // const dirname = './mock/jsonServer' // use for use in this repo

  const destination = path.join(dirname, 'index2.json')

  fs.writeFile(destination, json, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('File created successfully')
  })
}

resetJsonServer2()
