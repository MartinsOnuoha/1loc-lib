import { mergeArrayUnique } from "@array";

const result = mergeArrayUnique([1, 2, 4], [3, 2, 4], [5, 5, 6])

describe('mergeArrayUnique()', () => {
  test('removes duplicate from merged array', () => {
    expect(result).toEqual([1, 2, 4, 3, 5, 6])
  });
});
