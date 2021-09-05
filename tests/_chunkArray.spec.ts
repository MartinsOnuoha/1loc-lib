import { chunkArray } from "../src";

describe('chunkArray()', () => {
  test('returns chunks of a given array', (): void => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]])
  })
});
