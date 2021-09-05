import { countOccurrenceOfElements } from "../src";

describe('countOccurrenceOfElements()', () => {
  test('returns object with elements and their correct occurence', () => {
    expect(countOccurrenceOfElements([2, 1, 3, 3, 2, 3])).toEqual({ '1': 1, '2': 2, '3': 3 })
  })
});
