import { compareDates } from "@array";

describe('compareDates()', () => {
  test('Compare two dates', (): void => {
    expect(compareDates(new Date('2020-03-30'), new Date('2021-01-01'))).toEqual(false)
  })
});
