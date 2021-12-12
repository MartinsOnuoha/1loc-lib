import { getCumulativeSum } from '@array'

describe('getCumulativeSum()', (): void => {
  test('it returns an array of cumulative sum', (): void => {
    const arr = [1, 2, 3, 4]
    const result = getCumulativeSum(arr)

    expect(result).toEqual([1, 3, 6, 10])
    expect(result.length).toEqual(arr.length)
  })
});
