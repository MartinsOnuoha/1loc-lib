import { arrayOfObjectToObject } from "../src";
import { Person } from "../src/@types";

describe('arrayOfObjectToObject()', () => {
  test('converts an array to an object', () => {
    const value: Array<Person> = [{ name: 'a', age: 2 }, { name: 'b', age: 5 }]
    expect(arrayOfObjectToObject(value, 'name').length).toBeUndefined()
    expect(arrayOfObjectToObject(value, 'name').a).toBeTruthy()
    expect(arrayOfObjectToObject(value, 'name').b).toBeTruthy()
  })
});
