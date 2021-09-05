import { AnyObject } from './@types'

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
const makeTallyByProperty = (arr: Array<AnyObject>, prop: string): AnyObject => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});

export {
  castAsArray,
  isArrayEmpty,
  cloneArray,
  arrayEqual,
  arrayHasSameValues,
  arrayOfObjectToObject,
  arrayOfStringsToNumbers,
  makeTallyByProperty
}
