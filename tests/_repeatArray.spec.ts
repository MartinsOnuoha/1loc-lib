import { repeatArray } from "@array";

const arr: Array<number> = [1, 2, 3]
const result = repeatArray(arr, 3)

describe('repeatArray()', (): void => {
  test('duplicates the items 3 times', (): void => {
    expect(result.length).toEqual(arr.length * 3)
  });
  test('has duplicated values', (): void => {
    expect(result).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3])
  });
})
