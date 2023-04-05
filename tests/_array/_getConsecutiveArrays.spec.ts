import { getConsecutiveArrays } from "../../array";

describe('getConsecutiveArrays()', () => {
  it('returns an array of consecutive arrays', () => {
    expect(getConsecutiveArrays([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]])
  });
})
