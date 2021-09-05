import { castAsArray } from '../src/index'

describe('castAsArray()', () => {
  test('returns an array', () => {
    const value: any = 3
    const result = castAsArray(value)
    expect(result).toHaveLength(1)
  })
  test('returns array of string value', () => {
    const value: any = 'okay'
    const result = castAsArray(value)
    expect(typeof result[0] === 'string').toBeTruthy()
  })
  test('returns an array of unchanged values', () => {
    const a: any = 'okay'
    const b: any = 1

    expect(typeof castAsArray(a)[0] === 'string').toBeTruthy()
    expect(typeof castAsArray(b)[0] === 'number').toBeTruthy()
  })
});

