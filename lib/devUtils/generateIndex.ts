import fs from 'fs'
import path from 'path'

export const generateIndex = (folderPath: string): void => {
  // Read all files in the directory
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    const exports: string[] = []

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

      const basePath = path.basename(file, '.ts')
      // const baseName = basePath.toString()
      exports.push(`export * from './${basePath}'`)
    })
    exports.push(``) // add a blank line at the end of the file

    const content = exports.join('\n')
    fs.writeFile(path.join(folderPath, 'index.ts'), content, (err) => {
      if (err) {
        console.error('Error writing ${folderPath} index:', err)
        return
      }
      console.log(`Successfully generated index for: ${folderPath}`)
    })
  })
}

generateIndex('api/adapters/database/inMemory/methods')
generateIndex('api/adapters/database/inMemory')
generateIndex('api/adapters/database/jsonServer/methods')
generateIndex('api/adapters/database/jsonServer')
generateIndex('api/adapters/database/generic')
generateIndex('api/gateways')
generateIndex('api/useCases')
generateIndex('lib/entities')
