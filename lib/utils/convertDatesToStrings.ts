export const convertDatesToStrings = (obj) => {
  if (obj instanceof Date) {
    return obj.toISOString()
  }
  if (
    obj === null ||
    obj === undefined ||
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    typeof obj === 'boolean'
  ) {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map(convertDatesToStrings)
  } else {
    const newObj = { ...obj }
    for (const key in newObj) {
      if (newObj[key] instanceof Date) {
        newObj[key] = newObj[key].toISOString()
      } else if (typeof newObj[key] === 'object' && newObj[key] !== null) {
        newObj[key] = convertDatesToStrings(newObj[key])
      }
    }
    return newObj
  }
}
