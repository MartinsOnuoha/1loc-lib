import { getLengthLongestString } from "../../array";

describe('getLengthLongestString()', () => {
  test('returns the length of longest string in array', () => {
    expect(getLengthLongestString(['always', 'look', 'on', 'the', 'brightest', 'side', 'of', 'life'])).toBe(9)
  });
})
