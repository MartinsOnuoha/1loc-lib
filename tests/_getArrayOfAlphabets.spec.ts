import { getArrayOfAlphabets } from "@array";

describe('getArrayOfAlphabets()', () => {
  test('returns an array of alphabets', () => {
    expect(getArrayOfAlphabets()).toEqual('abcdefghijklmnopqrstuvwxyz'.split(''))
  });
})
