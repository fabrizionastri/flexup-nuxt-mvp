export function convertStringsToDates(obj) {
  if (obj instanceof Date) {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map((item) => convertStringsToDates(item))
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = { ...obj }
    for (const key in newObj) {
      if (
        typeof newObj[key] === 'string' &&
        /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(newObj[key])
      ) {
        newObj[key] = new Date(newObj[key])
      } else if (typeof newObj[key] === 'object' && newObj[key] !== null) {
        newObj[key] = convertStringsToDates(newObj[key])
      }
    }
    return newObj
  }
  return obj
}
