// lib/devUtils/generateIndex.ts

/* eslint-disable prettier/prettier */

/*
This script generates an index.ts file for a given source folder, and writes it to the destination folder.
It will skip the index.ts file, non-TS files, and all .spec.ts or .test.ts files. It will also skip any files that start with an underscore (_).
If the purge flag is set to true, it will overwrite the existing index.ts file. Else, it will append the new exports to the existing index.ts file.
The extra parameter is optional, and can be used to add an extra export to the index.ts file.
The script includes a list of folders to generate index.ts files for. You can add or remove folders from this list as needed.
*/

import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'
import { normalizePath } from './normalizePath'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'inMemory'
// const dataSource: string = 'jsonServer'

console.log('lib/devUtils/generateIndex.ts - dataSource:', dataSource, ':')

export const generateIndex = (
  destinationFolderPath: string,
  sourceFolderPath: string = '',
  purge: boolean = true,
  extra: string = ''
): void => {
  // Read all files in the directory
  const exports: string[] = []
  if (!sourceFolderPath) sourceFolderPath = destinationFolderPath
  fs.readdir(sourceFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }
    const indexFilePath = path.join(destinationFolderPath, 'index.ts')
    // console.log('libdevUtilsgenerateIndex.ts - indexFilePath : ', indexFilePath)

    files.forEach((file) => {
      // Skip the index.ts file, non-TS files, and all .spec.ts or .test.ts files
      if (
        file === 'index.ts' ||
        path.extname(file) !== '.ts' ||
        file.includes('.spec.ts') ||
        file.includes('.test.ts') ||
        file[0] === '_'
      ) {
        return
      }

      const filePath = path.join(sourceFolderPath, file)
      const relativePath = path.relative(destinationFolderPath, filePath)
      const importPath = `./${normalizePath(relativePath)}`
        .replace(/\.ts$/, '')
        .replace('./../', '../')
      exports.push(`export * from '${importPath}'`)
      exports.push(`\n`) // add a blank line at the end of the file
    })

    if (extra) exports.push(`export * from '${extra}'`)
    const content = exports.join('')

    const writeFunction = purge ? fs.writeFile : fs.appendFile
    const actionType = purge ? ' → updated' : '→ appended'

    writeFunction(indexFilePath, content, (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr)
        return
      }
      console.log(`   ${normalizePath(indexFilePath)} ${actionType}`)
    })
  })
}

generateIndex('api/adapters/database/generic')
generateIndex('api/adapters/database/generic/methods')
generateIndex(`api/adapters/database/inMemory`)
generateIndex(`api/adapters/database/inMemory/methods`)
generateIndex(`api/adapters/database/jsonServer`)
generateIndex(`api/adapters/database/jsonServer/methods`)
generateIndex(`api/adapters/database/generic/interfaces`)

generateIndex('api/adapters/database/generic', `api/adapters/database/${dataSource}`, false)
generateIndex('api/adapters/database/generic/methods', `api/adapters/database/${dataSource}`, false)
generateIndex(
  'api/adapters/database/generic/methods',
  `api/adapters/database/${dataSource}/methods`,
  false
)

generateIndex('api/gateways')
generateIndex('api/useCases')
generateIndex('lib/entities')
generateIndex('lib/utils')
generateIndex('app/composables')
generateIndex('app/stores')
