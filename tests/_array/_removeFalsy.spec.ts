import { removeFalsy } from "@array";

const arr: Array<any> = [0, 'a string', '', NaN, true, 5, undefined, 'another string', false]
const result = removeFalsy(arr)

describe('removeFalsy()', (): void => {
  test('returns an array', (): void => {
    expect(result.length).toBeLessThanOrEqual(arr.length)
  });
  test('returns only truthy values', (): void => {
    expect(result.every(Boolean)).toBeTruthy()
  });
})
