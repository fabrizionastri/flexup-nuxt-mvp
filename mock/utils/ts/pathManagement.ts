import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

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
