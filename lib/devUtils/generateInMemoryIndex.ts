// lib/devUtils/generateInMemoryIndex.ts

// This script generatse the inMemory index file, by reading all .ts files in the mock/inMemory directory, and creating an export statement for objects named ${moduleName}Datas

import fs from 'fs'
import path from 'path'

const indexFile = 'index.ts'
const targetDir = 'mock/inMemory'

// Get all .ts files in the directory except index.ts
const files = fs.readdirSync(targetDir).filter((file) => file.endsWith('.ts') && file !== indexFile)

let exportStatements = ''
let importStatements = ''
let inMemoryObjectEntries = ''

files.forEach((file) => {
  const moduleName = path.basename(file, '.ts') // Remove the .ts extension

  // check if the file contains an export object named ${moduleName}Datas
  const fileContent = fs.readFileSync(path.join(targetDir, file), 'utf8')
  if (!fileContent.includes(`export const ${moduleName}Datas`)) {
    console.error(`Not valid entry found for:  ${file}`)
    // skip this file
    return // equivalent to continue
  }
  console.error(`Created new data entry for: ${file}`)
  exportStatements += `export * from './${moduleName}'\n`
  importStatements += `import { ${moduleName}Datas } from './${moduleName}'\n`
  inMemoryObjectEntries += `  ${moduleName}: ${moduleName}Datas,\n`
})

const output = `${importStatements}
${exportStatements}
export const inMemory = {
${inMemoryObjectEntries}}

export default inMemory
`

fs.writeFileSync(path.join(targetDir, indexFile), output)

console.log(`\nSuccessfully generated inMemory index file !`)
