// If this is a JS file, it cannot import objects from TS files. See other version in TS.

export async function loadObjectJS(fileName, objectName) {
  const module = await import(fileName)
  const myObject = module[objectName] // use the dynamic name here
  return myObject
}
