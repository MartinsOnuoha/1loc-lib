import { isArrayEmpty } from "../src";

describe('isArrayEmpty()', () => {
  test('returns true for empty array', () => {
    expect(isArrayEmpty([])).toBeTruthy()
  })
  test('returns false for non-empty array', () => {
    expect(isArrayEmpty([2, 34])).toBeFalsy()
  })
});
