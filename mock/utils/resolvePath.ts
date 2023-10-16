import tscp from 'tsconfig-paths'
import tsConfig from '../../tsconfig.json' assert { type: 'json' }

// Register tsconfig paths for resolution
const loadedTsconfig = tscp.register({
  baseUrl: './',
  paths: tsConfig.compilerOptions.paths
})

// console.log('resolvePath.ts - loadedTsconfig:', tsConfig.compilerOptions.paths)

console.log(`resolvePath.ts - resolvePath("./mock.js")`, './mock.js')

export const resolvePath2 = (filePath: string): string => {
  const resolve = tscp.createMatchPath(
    'C:Users/fabriRepos/flexup/flexup-nuxt-mvp/tsconfig.json',
    tsConfig.compilerOptions.paths
  )
  const resolvedPath = resolve(filePath)
  if (!resolvedPath) {
    throw new Error(`Unable to resolve path: ${filePath}`)
  }
  return resolvedPath
}

console.log(`resolvePath.ts - resolvePath("./mock.js")`, resolvePath2('./mock.js'))
