import { extractDateProps } from "@array";

describe('extractDateProps()', (): void => {
  test('Extract year, month, day, hour, minute, second and millisecond from a date', (): void => {
    const date: Date = new Date('11/06/2021')
    expect(extractDateProps(date)).toHaveLength(7)
  });
});
