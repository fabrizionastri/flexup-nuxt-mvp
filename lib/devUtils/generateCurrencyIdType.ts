// generateCurrencyIdType.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Import the currencyDatas array
import { currencyDatas } from '../../mock/inMemory'

// Get the currency IDs
const currencyIds = currencyDatas.map((data) => data.id)

// Create the CurrencyId type
const currencyIdType = `export type CurrencyId = '${currencyIds.join("' | '")}';\n`

// Get the directory name of the current module
const dirname = path.dirname(fileURLToPath(import.meta.url))

// Define the project root directory
const projectRoot = path.resolve(dirname, '../..')

// Define the path to the target file relative to the project root
const targetFilePath = path.join(projectRoot, 'lib/entities/currency.ts')

// Read the file into an array of lines
const lines = fs.readFileSync(targetFilePath, 'utf-8').split('\n')

// Find the index of the line to replace
const index = lines.findIndex((line) => line.startsWith('export type CurrencyId'))

// Replace the line
lines[index] = currencyIdType

// Write the array of lines back to the file
fs.writeFileSync(targetFilePath, lines.join('\n'))

// Log the success message
console.log(`CurrencyId type updated in ${targetFilePath}`)
