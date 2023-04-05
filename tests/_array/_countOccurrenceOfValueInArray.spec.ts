import { countOccurrenceOfValueInArray } from "../../array";

describe('countOccurrenceOfValueInArray()', (): void => {
    test('should return the correct number of a value occurs for an element that is in existence', (): void => {
      expect(countOccurrenceOfValueInArray([2, 1, 3, 3, 2, 3], 2)).toEqual(2)
    })
    test('should return 0 for an element that is not in the array', (): void => {
      expect(countOccurrenceOfValueInArray([2, 1, 3, 3, 2, 3], 9)).toEqual(0)
    })
});
