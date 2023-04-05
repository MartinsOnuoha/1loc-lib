import { getIndexOfMinValue } from "../../array";

describe('getIndexOfMinValue()', () => {
  test('returns the index of minimum value in array', () => {
    expect(getIndexOfMinValue([1, 3, 9, 7, 5])).toBe(2)
    expect(getIndexOfMinValue([1, 3, 7, 7, 15])).toBe(4)
  });
})
