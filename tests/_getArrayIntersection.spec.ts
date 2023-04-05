import { getArrayIntersection } from "@array";

describe('getArrayIntersection()', (): void => {
  test('it returns intersection of two arrays', (): void => {
    expect(getArrayIntersection([1, 2, 3], [2, 3, 4, 5])).toEqual([2, 3])
  })
  test('it returns intersection of three arrays', (): void => {
    expect(getArrayIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5])).toEqual([3])
  })
});
