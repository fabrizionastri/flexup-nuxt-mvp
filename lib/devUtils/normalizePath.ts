export const normalizePath = (inputPath: string): string => {
  return inputPath.replace(/\\+/g, '/').replace(/\\/g, '/')
}
