import { arrayHasSameValues } from "../src";

describe('arrayHasSameValues()', () => {
  test('returns true for arrays with similar values', () => {
    const a: Array<number> = [1, 2, 4]
    const b: Array<number> = [2, 1, 4]
    expect(arrayHasSameValues(a, b)).toBeTruthy()
  });
});
