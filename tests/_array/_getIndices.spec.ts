import { getIndices } from "../../array";

describe('getIndices()', () => {
  test('returns indices of item', () => {
    expect(getIndices(['h', 'e', 'l', 'l', 'o'], 'l')).toEqual([2, 3])
    expect(getIndices(['h', 'e', 'l', 'l', 'o'], 'w')).toEqual([])
  });
})
