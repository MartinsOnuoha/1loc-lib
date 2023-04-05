import { countOccurrenceOfElements } from "@array";

describe('countOccurrenceOfElements()', (): void => {
  test('returns object with elements and their correct occurence', (): void => {
    expect(countOccurrenceOfElements([2, 1, 3, 3, 2, 3])).toEqual({ '1': 1, '2': 2, '3': 3 })
  })
});
