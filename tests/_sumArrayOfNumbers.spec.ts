import { sumArrayOfNumbers } from "../src";

const result = sumArrayOfNumbers([2, 3, 4])
describe('sumArrayOfNumbers()', (): void => {
  test('returns the sum of an array', (): void => {
    expect(result).toEqual(9)
  });
})
