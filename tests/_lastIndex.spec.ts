import { lastIndex } from "@array";

describe('lastIndex()', () => {
  test('returns index of last matching item', (): void => {
    const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8]
    expect(lastIndex(arr, (i) => i % 2 === 1)).toBe(4)
    expect(lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6)).toBe(5)
  })
})
