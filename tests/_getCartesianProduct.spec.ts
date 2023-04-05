import { getCartesianProduct } from "@array";

describe('getCartesianProduct()', () => {
  test('it returns the cartesian product', () => {
    const result = getCartesianProduct([1, 2], [3, 4])
    expect(result).toEqual([ [1, 3], [1, 4], [2, 3], [2, 4] ])
  });
});
