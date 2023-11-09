export const clone = <T extends object | string | number | boolean>(source: T): T => {
  if (typeof source === 'object' && source !== null) {
    return JSON.parse(JSON.stringify(source))
  } else {
    // For primitive types like string and number, you can return them directly
    return source
  }
}
