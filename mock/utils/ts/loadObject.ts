export const loadObject = async (filePath: string, objectName: string) => {
  const resolvedFileName = resolvePathUsingTsconfig(filePath)
  const module = await import(resolvedFileName)
  const myObject = module[objectName] // use the dynamic name here
  return myObject
}

export const accountTS = await loadObject('./mock.ts', 'account')
export const plop = await loadObject('mock/utils/ts/mock.ts', 'account')

console.log('accounts:', accountTS) // Logs the object to the console
