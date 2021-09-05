import { arrayOfObjectToObject } from "../src";
import { Person } from "../src/@types";

describe('arrayOfObjectToObject()', (): void => {
  test('converts an array to an object', (): void => {
    const value: Array<Person> = [{ name: 'a', age: 2 }, { name: 'b', age: 5 }]
    expect(arrayOfObjectToObject(value, 'name').length).toBeUndefined()
    expect(arrayOfObjectToObject(value, 'name').a).toBeTruthy()
    expect(arrayOfObjectToObject(value, 'name').b).toBeTruthy()
  })
});
