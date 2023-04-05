import { getRankOfArrayNumbers } from "../../array";

describe('getRankOfArrayNumbers()', (): void => {
  test('returns the rank of each item', (): void => {
    expect(getRankOfArrayNumbers([80, 65, 90, 50], 1)).toEqual([3, 2, 4, 1])
    expect(getRankOfArrayNumbers([80, 65, 90, 50], 0)).toEqual([2, 3, 1, 4])
  })
  test('returns the rank of alphabets', (): void => {
    expect(getRankOfArrayNumbers(['a', 'c', 'd', 'b'], 0)).toEqual([4, 2, 1, 3])
    expect(getRankOfArrayNumbers(['a', 'b', 'c', 'd'], 1)).toEqual([1, 2, 3, 4])
  })
});
