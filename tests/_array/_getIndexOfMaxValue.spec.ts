import { getIndexOfMaxValue } from "@array";

describe('getIndexOfMaxValue()', () => {
  test('returns index of the maximum value in array', () => {
    expect(getIndexOfMaxValue([1, 3, 9, 7, 5])).toBe(2)
  });
});
