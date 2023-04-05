import { removeFalsy } from "@array";

const arr: Array<any> = [0, 'a string', '', NaN, true, 5, undefined, 'another string', false]
const result = removeFalsy(arr)

describe('removeFalsy()', (): void => {
  test('returns an array of truthy values', (): void => {
    expect(result.length).toBeLessThan(arr.length)
    expect(result).toEqual(['a string', true, 5, 'another string'])
  });
  test('returns only truthy values', (): void => {
    expect(result.every(Boolean)).toBeTruthy()
  });
})
