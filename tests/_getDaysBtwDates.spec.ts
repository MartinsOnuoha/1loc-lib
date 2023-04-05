import { getDaysBtwDates } from "@array";

describe('getDaysBtwDates()', () => {
  test('returns number of days between dates', (): void => {
    expect(getDaysBtwDates(new Date('2014-12-19'), new Date('2020-01-01'))).toEqual(1839)
  })
});
