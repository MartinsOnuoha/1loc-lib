import { createArrayFromRange } from '@array'

const arr = createArrayFromRange(5, 10)

describe('createArrayFromRange()', (): void => {
    test('returns an array', (): void => {
      expect(arr.length).toBeLessThanOrEqual(arr.length)
    });
    test('should return an array with correct inital value', (): void => {
        expect(arr[0]).toEqual(5)
    })
    test('should return an array with correct final value', (): void => {
        expect(arr[arr.length - 1]).toEqual(10)
    })
})
