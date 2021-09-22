import { sortArrayOfNumbers } from "@array";

describe('sortArrayOfNumbers()', (): void => {
  test('returns sorted array', () => {
    expect(sortArrayOfNumbers([1, 5, 2, 4, 3])).toEqual([1, 2, 3, 4, 5])
  });
})
