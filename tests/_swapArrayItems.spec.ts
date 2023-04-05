import { swapArrayItems } from "@array"

describe('swapArrayItems()', (): void => {
  test('swaps two array items', (): void => {
    const arr = [1, 2, 3, 4, 5]
    const result = swapArrayItems(arr, 1, 4)
    expect(result).toEqual([1, 5, 3, 4, 2])
  });
})
