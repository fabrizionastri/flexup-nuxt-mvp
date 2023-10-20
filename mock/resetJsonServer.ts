import fs from 'fs'
import inMemory from './inMemory'

export const resetJsonServer = () => {
  const json = JSON.stringify(im, null, 2)
  const destination = 'mock/jsonServer/index.json'
  fs.writeFile(destination, json, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('File created successfully')
  })
}

resetJsonServer()
