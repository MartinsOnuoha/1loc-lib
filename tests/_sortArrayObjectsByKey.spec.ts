import { sortArrayObjectsByKey } from "../src";

describe('sortArrayObjectsByKey()', (): void => {
  test('sorts items based on give key', () => {
    const people = [
      { name: 'Foo', age: 42 },
      { name: 'Bar', age: 24 },
      { name: 'Fuzz', age: 36 },
      { name: 'Baz', age: 32 },
  ];
    expect(sortArrayObjectsByKey(people, 'age')).toEqual([
      { name: 'Bar', age: 24 },
      { name: 'Baz', age: 32 },
      { name: 'Fuzz', age: 36 },
      { name: 'Foo', age: 42 },
    ])
  });
});
