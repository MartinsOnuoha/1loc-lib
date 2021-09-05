import { arrayEqual, cloneArray } from "../src";


describe('arrayEqual()', () => {
  test('returns true for equal arrays', () => {
    const arr1 = [2, 3, 4]
    const arr2 = cloneArray([2, 3, 4])
    expect(arrayEqual(arr1, arr2)).toBeTruthy()
  });
  it('returns false for non-equal arrays', () => {
    const arr1 = [2, 3, 4]
    const arr2 = [3, 4, 5]
    expect(arrayEqual(arr1, arr2)).toBeFalsy();
  })
});
