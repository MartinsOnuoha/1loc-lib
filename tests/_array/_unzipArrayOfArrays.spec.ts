import { unzip } from "../../array";

const arr = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
const result = unzip(arr)

describe('unzip()', (): void => {
  test('returns array of arrays', (): void => {
    expect(result.length).toBeTruthy()
  })
  test('returns unzipped version of given array', () => {
    expect(result).toEqual([['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]])
  });
});
