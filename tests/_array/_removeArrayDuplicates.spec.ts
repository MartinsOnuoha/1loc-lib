import { removeArrayDuplicates } from "@array";

const result = removeArrayDuplicates([1, 1, 3, 4, 5, 3])
describe('removeArrayDuplicates()', (): void => {
  test('it should remove duplicates from array', (): void => {
    expect(result).toEqual([1, 3, 4, 5])
  });
})
