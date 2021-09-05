import { getSingleOccurrence } from "../src";

const arr = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
const result = getSingleOccurrence(arr)

describe('getSingleOccurrence()', (): void => {
  test('returns an array', (): void => {
    expect(result.length).toBeTruthy()
  });
  test('returns only single occuring items', (): void => {
    expect(result).toEqual(['h', 'e', 'w', 'r', 'd'])
  });
  test('returns lesser items or same', (): void => {
    expect(result.length).toBeLessThanOrEqual(arr.length)
  });
})
