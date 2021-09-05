import { arrayEqual, cloneArray } from "../src";


describe('arrayEqual()', (): void => {
  test('returns true for equal arrays', (): void => {
    const arr1 = [2, 3, 4]
    const arr2 = cloneArray(arr1)
    expect(arrayEqual(arr1, arr2)).toBeTruthy()
  });
  it('returns false for non-equal arrays', (): void => {
    const arr1 = [2, 3, 4]
    const arr2 = [3, 4, 5]
    expect(arrayEqual(arr1, arr2)).toBeFalsy();
  })
  it('returns false for similar unordered arrays', (): void => {
    const arr1 = [2, 3, 4]
    const arr2 = [3, 2, 4]
    expect(arrayEqual(arr1, arr2)).toBeFalsy();
  })
});
