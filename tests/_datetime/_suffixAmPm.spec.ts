import { suffixAmPm } from "@groups";

describe('suffixAmPm()', () => {
  test('should append AM to hour', () => {
    expect(suffixAmPm(5)).toBe('5am')
    expect(suffixAmPm(15)).toBe('3pm')
    expect(suffixAmPm(0)).toBe('12am')
  });
})
