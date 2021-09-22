import { emptyArray } from "@array";

describe('emptyArray()', (): void => {
  test('it returns an empty array', (): void => {
    const result = [1, 2, 3, 4]
    emptyArray(result)

    expect(result).toEqual([])
    expect(result.length).toEqual(0)
    expect(result[0]).toBeFalsy()
  })
});
