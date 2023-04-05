import { flatten } from "@array";

describe('flatten()', () => {
  test('it should flatten nested array', () => {
    expect(flatten(['cat', ['lion', 'tiger']])).toEqual(['cat', 'lion', 'tiger'])
  });
})
