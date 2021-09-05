import { arrayOfStringsToNumbers } from "../src";

describe('arrayOfStringsToNumbers()', () => {
  test('returns array of numbers given array of strings', () => {
    const arr: Array<string> = ['2', '4', '4']
    const result: Array<number> = arrayOfStringsToNumbers(arr)
    expect(result.every(v => typeof v === 'number')).toBeTruthy()
  })
  test('returns some NaN values for non numbers', () => {
    const arr: Array<string> = ['2', '4', 'man']
    const result: Array<number> = arrayOfStringsToNumbers(arr)
    expect(result.some(v => isNaN(v))).toBeTruthy()
  })
})

arrayOfStringsToNumbers
