import { getAverage } from "../../array";

describe('getAverage()', () => {
  test('returns the average of values in array', () => {
    expect(getAverage([1, 2, 3])).toBe(2)
  });
})
