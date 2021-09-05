import { swapArrayItems } from "../src";

describe('swapArrayItems()', (): void => {
  test('', (): void => {
    const arr = [1, 2, 3, 4, 5]
    const result = swapArrayItems(arr, 1, 4)
    expect(result).toEqual([1, 5, 3, 4, 2])
  });
})
