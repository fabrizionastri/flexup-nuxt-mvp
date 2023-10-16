import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

export async function loadObjectTS(fileName: string, objectName: string) {
  const module = await import(fileName)
  const myObject = module[objectName] // use the dynamic name here
  return myObject
}

// Step 1 - first check that the function works when I give the path and object name manually
const accountDatas = await loadObjectTS('./mock.ts', 'account')

console.log('accountDatas:', accountDatas) // Logs the object to the console

// Step 2 - now try to make it dynamic
const directory = new URL('.', import.meta.url).pathname
const __dirname = process.platform === 'win32' ? directory.slice(1) : directory
console.log('__dirname: ' + __dirname)

const mockDir = path.join(__dirname, './mock')
console.log('mockDir: ' + mockDir)

const files = fs.readdirSync(mockDir)
console.log('files: ' + files)

const file = files[0]
console.log('file: ' + file)

const filePath = path.join(mockDir, file)
console.log('filePath: ' + filePath)

const filePathURL = pathToFileURL(filePath).href
console.log('filePathURL: ' + filePathURL)

const entity = path.basename(file, '.ts')
console.log('entity: ' + entity)

const objectName = `${entity}Datas`
console.log('objectName: ' + objectName)

const myObject = await loadObjectTS(filePathURL, objectName)
console.log('myObject: ', myObject)
