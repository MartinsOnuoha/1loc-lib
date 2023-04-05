import { getNthItems } from "../../array";

describe('getNthItems()', () => {
  test('returns array of nth items', () => {
    expect(getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([2, 4, 6, 8])
    expect(getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([3, 6, 9])
  });
})
