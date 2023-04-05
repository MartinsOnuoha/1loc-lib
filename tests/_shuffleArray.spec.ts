import { shuffleArray, arrayEqual, arrayHasSameValues } from "@array";

const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = shuffleArray(arr)

describe('shuffleArray()', (): void => {
  test('returns an array', (): void => {
    expect(result.length).toBeTruthy()
  });
  test('returns reshuffled array', (): void => {
    expect(arrayEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeFalsy()
  });
  test('returns reshuffled array with same values', (): void => {
    expect(arrayHasSameValues(result, arr)).toBeTruthy()
  });
})
