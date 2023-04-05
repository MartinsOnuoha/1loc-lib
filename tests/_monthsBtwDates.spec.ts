import { monthsBtwDates } from "@array";

describe('monthsBtwDates()', () => {
  test('returns the number of months between two dates', (): void => {
    expect(monthsBtwDates(new Date('2020-01-01'), new Date('2021-01-01'))).toEqual(12)
  })
});
