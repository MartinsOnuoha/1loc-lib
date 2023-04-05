import { getUnionOfArray } from "../../array"

describe('getUnionOfArray()', (): void => {
  test('it returns union of 2 arrays', (): void => {
    expect(getUnionOfArray([1, 2, 4], [3, 4])).toEqual([1, 2, 4, 3])
  });
  test('it returns union of 3 arrays', (): void => {
    expect(getUnionOfArray([1, 2, 4], [3, 4], [5])).toEqual([1, 2, 4, 3, 5])
  });
  test('it returns union of 4 arrays', (): void => {
    expect(getUnionOfArray([1, 2, 4], [3, 4], [5], [6, 7, 1])).toEqual([1, 2, 4, 3, 5, 6, 7])
  });
})


