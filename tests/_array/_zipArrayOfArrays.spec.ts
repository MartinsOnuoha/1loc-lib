import { zip } from "../../array"

const result = zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])

describe('zip()', (): void => {
  test('returns zipped version of given array', (): void => {
    expect(result).toEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])
  });
})
