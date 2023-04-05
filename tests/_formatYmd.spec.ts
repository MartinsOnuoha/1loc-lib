import { formatYmd } from "@array";

describe('formatYmd()', () => {
  test('Convert a date to YYYY-MM-DD format', (): void => {
    expect(formatYmd(new Date('2020-03-30'))).toEqual('2020-03-30')
  })
});
