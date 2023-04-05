import { getMaxItemByKey } from "../../array";

describe('getMaxItemByKey()', () => {
  test('returns object with max value of provided key', () => {
    const arr = [
      { name: 'Bar', age: 24 },
      { name: 'Baz', age: 32 },
      { name: 'Foo', age: 42 },
      { name: 'Fuzz', age: 36 },
  ]
    expect(getMaxItemByKey(arr, 'age')).toEqual({ name: 'Foo', age: 42 })
  });
});
