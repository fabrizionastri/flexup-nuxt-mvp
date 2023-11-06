import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'
import { normalizePath } from './normalizePath'
config()

const dataSource: string = process.env.STORAGE_TYPE || 'inMemory'
// const dataSource: string = 'jsonServer'

console.log('lib/devUtils/generateIndex.ts - dataSource:', dataSource)

export const generateIndex = (
  sourceFolderPath: string,
  destinationFolderPath: string = '',
  purge: boolean = true,
  extra: string = ''
): void => {
  // Read all files in the directory
  const exports: string[] = []
  fs.readdir(sourceFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }
    if (!destinationFolderPath) destinationFolderPath = sourceFolderPath
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
    })

    if (extra) exports.push(`export * from '${extra}'`)
    exports.push(`\n`) // add a blank line at the end of the file

    const content = exports.join('\n')

    const writeFunction = purge ? fs.writeFile : fs.appendFile

    writeFunction(indexFilePath, content, (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr)
        return
      }
      console.log(`lib/devUtils/generateIndex.ts - ${indexFilePath} updated`)
    })
  })
}

generateIndex('api/adapters/database/generic')
generateIndex(`api/adapters/database/${dataSource}`)
generateIndex(`api/adapters/database/${dataSource}`, 'api/adapters/database/generic', false)

generateIndex(`api/adapters/database/${dataSource}/methods`)
generateIndex(
  `api/adapters/database/${dataSource}/methods`,
  'api/adapters/database/generic/methods',
  false
)
generateIndex(`api/adapters/database/${dataSource}`, 'api/adapters/database/generic/methods', false)

generateIndex('api/gateways')
generateIndex('api/useCases')
generateIndex('lib/entities')
