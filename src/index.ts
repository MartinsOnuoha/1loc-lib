import { AnyObject, Order } from './@types'

/**
 * Cast a value as an array
 * @param value value to be casted to array
 * @returns
 */
const castAsArray = (value: Array<any>): Array<any> => Array.isArray(value) ? value : [value];

/**
 * Check if an array is empty
 * @param value array to validate
 * @returns boolean
 */
const isArrayEmpty = (value: Array<any>): Boolean => !Array.isArray(value) || value.length === 0;

/**
 * Clone an array
 * @param value array to clone
 * @returns clone of initial array
 */
const cloneArray = (value: Array<any>): Array<any> => value.slice(0);

/**
 * Compare two arrays has same values in same order
 * @param a first array to compare
 * @param b second array to compare
 * @returns boolean
 */
const arrayEqual = (a: Array<any>, b: Array<any>): Boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * Compare two arrays regardless of order
 * @param a first array to compare
 * @param b second array to compare
 * @returns boolean
 */
const arrayHasSameValues = (a: Array<any>, b: Array<any>): Boolean => JSON.stringify(a.sort()) === JSON.stringify(b.sort())

/**
 * Convert an array of objects to a single object
 * @param arr array of objects
 * @param key key from the objects value to group by
 * @returns object
 */
const arrayOfObjectToObject = (arr: Array<AnyObject>, key: string): AnyObject => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

/**
 * Convert an array of strings to numbers
 * @param arr an array of stringified numbers
 * @returns array of number types
 */
const arrayOfStringsToNumbers = (arr: Array<string>): Array<number> => arr.map(Number)

/**
 * Creates a tally of items in an array based on specified property
 * @param arr an array of objects
 * @param prop property to make tally by
 * @returns object
 */
const makeTallyByProperty = (arr: Array<AnyObject>, prop: string): AnyObject => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {} as AnyObject);

/**
 * Creates an object with each element in an array and it's occurrence
 * @param arr an array of objects
 * @returns object
 */
const countOccurrenceOfElements = (arr: Array<string | number>): AnyObject => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {} as Record<string | number, any>);

/**
 * Returns the intersection in multiple arrays
 * @param a array 1
 * @param arr other arrays
 * @returns array of intersections
 */
 const getArrayIntersection = (a: Array<any>, ...arr: Array<any>): Array<any> => [...new Set(a)].filter(v => arr.every(b => b.includes(v)))

 /**
  * Rank array numbers or alphabets in ascending or descending order
  * @param arr array to be ranked
  * @param order 0 - descending order | 1 -  ascending order
  * @returns array of ranks
  */
const getRankOfArrayNumbers = (arr: Array<number|string>, order: Order): Array<number> => arr.map((x, _, z) => z.filter(w => order ? w < x : w > x).length + 1);

/**
 * sum numbers in an array
 * @param arr Array to sum up
 * @returns sum of numbers in array
 */
const sumArrayOfNumbers = (arr: Array<number>): number => arr.reduce((acc: number, curr: number) => acc + curr, 0)

/**
 * returns given array with unique items
 * @param arr array to remove duplicates from
 * @returns array with unique items
 */
const removeArrayDuplicates = (arr: Array<any>): Array<any> => [...new Set(arr)]

/**
 * Get the union of multiple arrays
 * @param arr arrays to compare separated by commas
 * @returns union of all specified arrays
 */
const getUnionOfArray = (...arr: Array<any>): Array<any> => [...new Set(arr.flat())]

/**
 * groups an array of objects by specified key
 * @param arr array to be grouped
 * @param key key to group items by
 * @returns Object<Array>
 */
const groupByKey = (arr: Array<AnyObject>, key: string): AnyObject => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as AnyObject);

/**
 * merges two or more arrays into one
 * @param arr base array
 * @param arrays other arrays
 * @returns array
 */
const mergeArray = (arr: Array<any>, ...arrays: Array<any>): Array<any> => arr.concat(...arrays);

/**
 * merges two or more arrays and returns a unique array
 * @param arr base array
 * @param arrays other arrays
 * @returns unique array
 */
const mergeArrayUnique = (arr: Array<any>, ...arrays: Array<any>): Array<any> => [...new Set(arr.concat(...arrays))];

/**
 * Partition an array into two places based on a condition
 * @param arr array to partition
 * @param cb callback function with condition
 * @returns partitioned array
 */
const partitionArray = (arr: Array<any>, cb: Function): Array<Array<any>> => arr.reduce((acc, i) => (acc[cb(i) ? 0 : 1].push(i), acc), [[], []]);

/**
 * Returns only single occurring items in an array
 * @param arr array to filter
 * @returns array
 */
const getSingleOccurrence = (arr: Array<any>): Array<any> => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

/**
 * removes falsy values from a given array
 * @param arr array to filter
 * @returns array with truthy values
 */
const removeFalsy = (arr: Array<any>): Array<any> => arr.filter(Boolean)

/**
 * Repeat an array a specified number of times
 * @param arr array to repeat
 * @param n number of times to repeat array
 * @returns array repeated n times
 */
const repeatArray = (arr: Array<any>, n: number): Array<any> => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length])

/**
 * shuffle a given array
 * @param arr array to be shuffled
 * @returns shuffled array
 */
const shuffleArray = (arr: Array<any>): Array<any> => arr.sort(() => .5 - Math.random());

/**
 * Sort an array based on the key provided
 * @param arr array to be sorted
 * @param key object key to sort by
 * @returns array of sorted items
 */
const sortArrayObjectsByKey = (arr: Array<AnyObject>, key: string): Array<AnyObject> => arr.concat().sort((a, b) => (a[key] > b[key]) ? 1 : ((a[key] < b[key]) ? -1 : 0));

/**
 * sort an array of numbers
 * @param arr array of numbers to be sorted
 * @returns sorted array
 */
const sortArrayOfNumbers = (arr: Array<number>): Array<number> => arr.sort((a: number, b: number) => a - b);

/**
 * Returns chunks of an array
 * @param arr array to be chuncked
 * @param size hwo many chuncks
 * @returns array chunks
 */
const chunkArray = (arr: Array<any>, size: number) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

/**
 * Swaps the rows and columns of a matrix
 * @param matrix matrix to swap
 * @returns matrix after swap
 */
const swapMatrixRowCol = (matrix: Array<Array<number>>): Array<Array<number>> => matrix[0].map((_, i) => matrix.map(row => row[i]));

const swapArrayItems = (arr: Array<any>, i: any, j: any): Array<any> => arr[i] && arr[j] && [...arr.slice(0, i), arr[j], ...arr.slice(i + 1, j), arr[i], ...arr.slice(j + 1)] || arr;

export {
  castAsArray,
  isArrayEmpty,
  cloneArray,
  arrayEqual,
  arrayHasSameValues,
  arrayOfObjectToObject,
  arrayOfStringsToNumbers,
  makeTallyByProperty,
  getArrayIntersection,
  getRankOfArrayNumbers,
  countOccurrenceOfElements,
  sumArrayOfNumbers,
  removeArrayDuplicates,
  getUnionOfArray,
  groupByKey,
  mergeArray,
  mergeArrayUnique,
  partitionArray,
  getSingleOccurrence,
  removeFalsy,
  repeatArray,
  shuffleArray,
  sortArrayObjectsByKey,
  sortArrayOfNumbers,
  chunkArray,
  swapMatrixRowCol,
  swapArrayItems
}
