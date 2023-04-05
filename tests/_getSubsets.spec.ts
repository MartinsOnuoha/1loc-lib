import { getSubsets } from "@array";

describe('getSubsets()', () => {
  test('returns array of subsets', () => {
    expect(getSubsets([1, 2])).toEqual([[], [1], [2], [1, 2]])
    expect(getSubsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
  });
})
