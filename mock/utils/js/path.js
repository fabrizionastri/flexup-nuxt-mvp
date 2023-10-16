import path from 'path'

const relative = '../test/cars.json'
const alias = 'gateways/test/cars.json' // "gateways" is a alias defined in my tsconfig.json "path" as "gateways/*": ["./api/core/gateways/*", "./api/core/gateways"],"
const name = 'joe'

const checkPath = (pathStr) => {
  console.log('\n')
  console.log('pathStr: \t', pathStr)
  console.log('isAbsolute: \t', path.isAbsolute(pathStr))
  console.log('basename: \t', path.basename(pathStr))
  console.log('extname: \t', path.extname(pathStr))
  console.log('resolve: \t', path.resolve(pathStr))
  console.log('join: \t\t', path.join('/', 'users', name, 'notes.txt'))
  console.log('dirname: \t', path.dirname(pathStr))
  console.log('normalize: \t', path.normalize(pathStr))
}

checkPath(relative)
checkPath(alias)
