import { cloneArray } from "../../array";
import { Person } from "@types";

describe('cloneArray()', (): void => {
  test('clones an array of numbers', (): void => {
    const values: Array<number> = [2, 3, 4]
    const result = cloneArray(values)
    expect(result).toHaveLength(3)
  })
  test('clones an array of strings', (): void => {
    const values: Array<string> = 'martins'.split('')
    const result = cloneArray(values)
    expect(result).toHaveLength(7)
  })
  test('produces unchanged clone', (): void => {
    const values: Array<number> = [1, 2, 3]
    const result = cloneArray(values)
    expect(JSON.stringify(values) === JSON.stringify(result)).toBeTruthy();
  })
  test('clones an array of objects', (): void => {
    const values: Array<Person> = [{ name: 'sam', age: 2 }, { name: 'james', age: 20 }]
    const result = cloneArray(values)
    expect(JSON.stringify(result) === JSON.stringify(values)).toBeTruthy();
  })
})
