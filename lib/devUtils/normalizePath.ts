// lib/devUtils/normalizePath.ts

/*
Normalize a path by replacing backslashes with forward slashes and removing duplicate slashes
*/

export const normalizePath = (inputPath: string): string => {
  return inputPath.replace(/\\+/g, '/').replace(/\\/g, '/')
}
