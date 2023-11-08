import { fileURLToPath } from 'url'

console.log(fileURLToPath(new URL('./lib', import.meta.url)))
