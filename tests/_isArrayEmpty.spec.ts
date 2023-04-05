import { isArrayEmpty } from "@array";

describe('isArrayEmpty()', (): void => {
  test('returns true for empty array', (): void => {
    expect(isArrayEmpty([])).toBeTruthy()
  })
  test('returns false for non-empty array', (): void => {
    expect(isArrayEmpty([2, 34])).toBeFalsy()
  })
});
