import fs from 'fs'
import path from 'path'

/* // Path to the mock in-memory directory
const directory = new URL('.', import.meta.url).pathname
const __dirname = process.platform === 'win32' ? directory.slice(1) : directory
console.log('__dirname: ' + __dirname)
const mockDir = path.join(__dirname, '../../mock/inMemory')
console.log('mockDir: ' + mockDir)

// Get all files in the mock in-memory directory
const files = fs.readdirSync(mockDir)

// Object to store the final data
const db = {} */

/* // Process each file
// for (const file of files) {
const file = files[0]
// Only process TypeScript files
if (path.extname(file) === '.ts') {
  // Dynamically import the module
  console.log('file: ' + file)
  const filePath = path.join(mockDir, file)
  console.log('filePath: ' + filePath)
  // Extract the entity name from the file name
  const entity = path.basename(file, '.ts')
  console.log('entity: ' + entity)
  const myObject = await loadObject(filePath, entity)
  console.log('myObject: ' + myObject)
  // import(filePath).then((module) => console.log('module: ' + module))
  // Extract the raw data array
  // Assumes the raw data is named as "<entity>Datas" (e.g., accountDatas)
  // const rawDataArrayName = `${entity}Datas`
  // loadObject(filePath, rawDataArrayName)
  // import(path.join(mockDir, file)).then((module) => {
  //
  //       if (module[rawDataArrayName]) {
  //         db[entity] = module[rawDataArrayName]
  //       }
  //
  //       // Check if we have processed all files
  //       if (Object.keys(db).length === files.length) {
  //         // Write to db.json
  //         const outputPath = path.join(__dirname, '../../mock/jsonServer/new_db.json')
  //         fs.writeFileSync(outputPath, JSON.stringify(db, null, 2), 'utf-8')
  //       }
  // })
  // }
}

function print(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: Value: ${value}`)
  }
}

 */

export async function loadObject(fileName: string, objectName: string) {
  const module = await import(fileName)
  const myObject = module[objectName] // use the dynamic name here
  return myObject
}

const accountDatas = await loadObject('../../mock/inMemory/account.ts', 'accountDatas')

console.log('accountDatas:', accountDatas) // Logs the object to the console
