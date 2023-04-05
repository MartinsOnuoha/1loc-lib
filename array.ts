import { AnyObject, Order } from '@types'

/**
 * Split an array into chunks
 * @param arr array to be chuncked
 * @param size hwo many chuncks
 * @returns array chunks
 */
const chunkArray = <T,>(arr: T[], size: number): T[][] => arr.reduce((acc: T[][], e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
/**
 * Swaps the rows and columns of a matrix
 * @param matrix matrix to swap
 * @returns matrix after swap
 */
const transpose = <T extends number>(matrix: Array<T[]>): Array<T[]> => matrix[0].map((_, i) => matrix.map(row => row[i]));
/**
 * zip a given array
 * @param arr array to be zipped
 * @returns zipped array
 */
const zip = (...arr: Array<Array<any>>) => Array.from({ length: Math.max(...arr.map(a => a.length)) }, (_, i) => arr.map(a => a[i]));
/**
 * Add AM PM suffix to an hour
 * @param h is an hour number between 0 and 23
 * @returns string
 */
const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
/**
 * Calculate the number of difference days between two dates
 * @param date Date
 * @param otherDate Date
 * @returns number
 */
const getDaysBtwDates = (date: Date, otherDate: Date): number => Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24));
/**
 * Calculate the number of months between two dates
 * @param startDate
 * @param endDate
 * @returns number
 */
const monthsBtwDates = (startDate: Date, endDate: Date): number => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
/**
 * swap array items
 * @param arr array to swap
 * @param i first item
 * @param j second item
 * @returns array with swaped values
 */
const swapArrayItems = <T,_>(a: T[], i: number, j: number): T[] => (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
/**
 * unzip a given array
 * @param arr array to be unzipped
 * @returns unzipped array
 */
const unzip = (arr: Array<Array<any>>): Array<any> => arr.reduce((acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc), Array.from({ length: Math.max(...arr.map(a => a.length)) }, (_) => []));
/**
 * Compare two dates
 * @param a first date
 * @param b second date
 * @returns boolean
 */
const compareDates = (a: Date, b: Date): boolean => a.getTime() > b.getTime();
/**
 * Convert a date to YYYY-MM-DD format
 * @param date
 * @returns string
 */
const formatYmd = (date: Date): string => date.toISOString().slice(0, 10);
/**
 * Convert seconds to hh:mm:ss format
 * @param s is number of seconds
 * @returns string
 */
const secondsToHms = (s: number): string => new Date(s * 1000).toISOString().substr(11, 8);
/**
 * Extract year, month, day, hour, minute, second and millisecond from a date
 * @param date Date
 * @returns string[]
 */
const extractDateProps = (date: Date): string[] =>date.toISOString().split(/[^0-9]/).slice(0, -1);


/**
 * Cast a value as an array
 * @param value value to be casted to array
 * @returns
 */
const castAsArray = <T,_>(value: T | T[]): T[] => Array.isArray(value) ? value : [value];

/**
 * Check if an array is empty
 * @param value array to validate
 * @returns boolean
*/
const isArrayEmpty = <T, _>(value: T[]): boolean => !Array.isArray(value) || value.length === 0;

/**
 * Clone an array
 * @param value array to clone
 * @returns clone of initial array
*/
const cloneArray = <T, _>(value: T[]): T[] => value.slice(0);

/**
 * Compare two arrays has same values in same order
 * @param a first array to compare
 * @param b second array to compare
 * @returns boolean
 */
const arrayEqual = <T, _>(a: T[], b: T[]): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * Compare two arrays regardless of order
 * @param a first array to compare
 * @param b second array to compare
 * @returns boolean
*/
const arrayHasSameValues = <T, _>(a: T[], b: Array<any>): boolean => JSON.stringify(a.sort()) === JSON.stringify(b.sort())

/**
 * Convert an array of objects to a single object
 * @param arr array of objects
 * @param key key from the objects value to group by
 * @returns object
*/
const arrayOfObjectToObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {} as Record<string, T>);

/**
 * Convert an array of strings to numbers
 * @param arr an array of stringified numbers
 * @returns array of number types
*/
const arrayOfStringsToNumbers = <T extends string | number>(arr: T[]): number[] => arr.map(Number)

/**
 * Creates a tally of items in an array based on specified property
 * @param arr an array of objects
 * @param prop property to make tally by
 * @returns object
*/
const makeTallyByProperty = <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K): Record<string, number> => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {} as Record<string, number>);

/**
 * Creates an object with each element in an array and it's occurrence
 * @param arr an array of objects
 * @returns object
*/
const countOccurrenceOfElements = <T extends string | number>(arr: T[]): Record<string, number> => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {} as Record<T, number>);

/**
 * Returns the number of times a value is present in an array
 * @param arr an array of values (number or string)
 * @param val an element (number or string) to search for
 * @returns number
*/
const countOccurrenceOfValueInArray = <T, _>(arr: T[], val: T): number => arr.filter(item => item === val).length;

/**
 * Create an array of cumulative sum
 * @param arr array of numbers to sum
 * @returns array of cumulative sum
 */
const getCumulativeSum = (arr: number[]): number[] => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);

/**
 * Create an array from a range
 * @param min start/initial value of the array
 * @param max end value of the array
 * @returns array with values from min to max
 */
const createArrayFromRange = (min: number, max: number) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

/**
 * create a cartesian product
 * @param array of numbers to use [1, 2], [3, 4]
 * @returns
*/
const getCartesianProduct = (...sets: Array<any>) => sets.reduce((acc, set) => acc.flatMap((x: number[]) => set.map((y: number) => [...x, y])), [[]])

/**
 * Empty a given array
 * @param arr array to be emptied
 * @returns array
 */
const emptyArray = (arr: Array<any>) => arr.length = 0

/**
 * Find the number from `arr` which is closest to `n`
 * @param arr array to search through
 * @param n number to find closest of
 * @returns number
 */
const getClosestValue = (arr: number[], n: number): number => arr.reduce((prev, curr) => Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);

/**
 * Find the index of the last matching item of an array
 * @param arr array to find index in
 * @param predicate condition items need to fulfil
 * @returns index of last item that fulfils condition
 */
const lastIndex = <T,_>(arr: T[], predicate: (a: T) => boolean): number => arr.map((item) => predicate(item)).lastIndexOf(true);

/**
 * Find the index of the maximum item of an array
 * @param arr array of numbers
 * @returns index of maximum value
 */
const getIndexOfMaxValue = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);

/**
 * Find the index of the maximum item of an array
 * @param arr array of numbers
 * @returns index of minimum value
 */
const getIndexOfMinValue = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);

/**
 * Find the length of the longest string in an array
 * @param arr array of strings
 * @returns length of longest string
*/
const getLengthLongestString = (arr: string[]): number => Math.max(...arr.map((el) => el.length));

/**
 *
 * @param arr array of objects
 * @param key object key to evaluate by
 * @returns object with highest value of provided key
 */
const getMaxItemByKey = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => (arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T));

/**
 * Find the minimum item of an array
 * @param arr array of numbers
 * @returns minimum number in array
 */
const getMinItem = (arr: number[]): number => Math.min(...arr)

/**
 * Flatten an array
 * @param arr multidimentional array to flatten
 * @returns flattened array
 */
const flatten = (arr: any[]): any[] => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flatten(b)] : [...a, b]), []);

/**
 * Generates an array of alphabet characters
 * @returns array of alphabets
 */
const getArrayOfAlphabets = (): string[] => [...Array(26)].map((_, i) => (i + 10).toString(36));

/**
 * Get all arrays of consecutive elements
 * @param arr array to generate chunk from
 * @param size size of each consecutive array
 * @returns nested array
 */
const getConsecutiveArrays = <T,_>(arr: T[], size: number): T[][] => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));

/**
 * Get all n-th items of an array
 * @param arr array of items
 * @param nth interval
 * @returns array of all items in nth interval
 */
const getNthItems = <T,_>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1);

/**
 * Get all subsets of an array
 * @param arr array
 * @returns array of subset
 */
const getSubsets = <T,>(arr: T[]): T[][] => (arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][]));

/**
 * Get indices of a value in an array
 * @param arr array to find indices in
 * @param value array value to search for
 * @returns array of indices where value exists
 */
const getIndices = <T,>(arr: T[], value: T): number[] => (arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[]));

/**
 * Get the average of an array
 * @param arr array to find average of
 * @returns average of all values
 */
const getAverage = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;

/**
 * Returns the intersection in multiple arrays
 * @param a array 1
 * @param arr other arrays
 * @returns array of intersections
*/
const getArrayIntersection = <T, _>(a: T[], ...arr: Array<any>): T[] => [...new Set(a)].filter(v => arr.every(b => b.includes(v)))

 /**
  * Rank array numbers or alphabets in ascending or descending order
  * @param arr array to be ranked
  * @param order 0 - descending order | 1 -  ascending order
  * @returns array of ranks
  */
const getRankOfArrayNumbers = <T extends number | string>(arr: T[], order: Order): Array<number> => arr.map((x, _, z) => z.filter(w => order ? w < x : w > x).length + 1);

/**
 * sum numbers in an array
 * @param arr Array to sum up
 * @returns sum of numbers in array
*/
const sumArrayOfNumbers = (arr: number[]): number => arr.reduce((acc: number, curr: number) => acc + curr, 0)

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
const groupByKey = (arr: Array<Record<string | number, any>>, key: string): Record<string | number, any> => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as AnyObject);

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
const removeFalsy = <T,_>(arr: T[]): Array<any> => arr.filter(Boolean)

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


export {
  chunkArray,
  transpose,
  zip,
  suffixAmPm,
  getDaysBtwDates,
  monthsBtwDates,
  swapArrayItems,
  unzip,
  compareDates,
  formatYmd,
  secondsToHms,
  extractDateProps,

  castAsArray,
  isArrayEmpty,
  cloneArray,
  arrayEqual,
  arrayHasSameValues,
  arrayOfObjectToObject,
  arrayOfStringsToNumbers,
  makeTallyByProperty,
  countOccurrenceOfElements,
  countOccurrenceOfValueInArray,
  getCumulativeSum,
  createArrayFromRange,
  getCartesianProduct,
  emptyArray,
  getClosestValue,
  lastIndex,
  getIndexOfMaxValue,
  getIndexOfMinValue,
  getLengthLongestString,
  getMaxItemByKey,
  getMinItem,
  flatten,
  getArrayOfAlphabets,
  getConsecutiveArrays,
  getNthItems,
  getSubsets,
  getIndices,
  getAverage,

  getArrayIntersection,
  getRankOfArrayNumbers,
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
}
