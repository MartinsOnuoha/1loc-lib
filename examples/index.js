const { castAsArray, isArrayEmpty, cloneArray, arrayEqual } = require('1loc')

console.table([
  { func: 'castAsArray' , input: 1, output: castAsArray(1) },
  { func: 'isArrayEmpty' , input: [1], output: isArrayEmpty([1]) },
  { func: 'cloneArray' , input: [1, 2], output: cloneArray([1, 2]) },
  { func: 'arrayEqual' , input: '[1] [1]', output: arrayEqual([1], [1]) },
])
