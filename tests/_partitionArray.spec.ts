import { partitionArray } from "../src";

const result = partitionArray([1, 2, 3, 4, 5], (n: number) => n % 2)

describe('partitionArray()', () => {
  test('returns an array of two items', (): void => {
    expect(result.length).toBe(2)
  });
  test('returns an array of two arrays', (): void => {
    expect(result[0].length).toBeTruthy()
    expect(result.length).toBeTruthy()
  });
  test('splits array based on condition', (): void => {

  })
})
