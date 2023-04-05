import { mergeArray } from "@array";

describe('mergeArray()', () => {
  test('it merges 2 arrays', () => {
    expect(mergeArray([1, 2, 3], [3, 4])).toEqual([1, 2, 3, 3, 4])
  });
  test('it merges 4 arrays', () => {
    expect(mergeArray([1, 2, 3], [3, 4], [5], [6, 7])).toEqual([1, 2, 3, 3, 4, 5, 6, 7])
  });
})
