import { getClosestValue } from "../../array";

const result = getClosestValue([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50)

describe('getClosestValue()', (): void => {
  test('it returns a number', (): void => {
    expect(typeof result === 'number').toBe(true)
  })
  test('it returns closest value', (): void => {
    expect(result).toBe(33)
  })
});
