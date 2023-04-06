import { plusOneYear } from "../array";

describe('plusOneYear()', () => {
  test('Determine one year from now', (): void => {
    const today = new Date();
    expect(plusOneYear.getFullYear()).toEqual(today.getFullYear() + 1)
  })
});
