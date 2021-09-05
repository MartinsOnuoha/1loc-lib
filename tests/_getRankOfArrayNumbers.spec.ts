import { getRankOfArrayNumbers } from "../src";

describe('getRankOfArrayNumbers()', (): void => {
  test('returns the rank of each item', (): void => {
    expect(getRankOfArrayNumbers([80, 65, 90, 50], 1)).toEqual([3, 2, 4, 1])
    expect(getRankOfArrayNumbers([80, 65, 90, 50], 0)).toEqual([2, 3, 1, 4])
  })
});
