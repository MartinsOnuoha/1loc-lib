import { getMinItem } from "../../array";

describe('getMinItem()', () => {
  test('returns minimum item in array', () => {
    expect(getMinItem([1, 2, 3, 4, 5])).toEqual(1)
  });
})

