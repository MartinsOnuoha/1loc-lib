import { makeTallyByProperty } from "../src";
import { AnyObject } from "../src/@types";


describe('makeTallyByProperty()', () => {
  test('returns an object type when given an array', () => {
    const arr: Array<AnyObject> = [
      { brand: 'audi', model: 'q8', year: '2019' },
      { brand: 'audi', model: 'rs7', year: '2020' },
      { brand: 'ford', model: 'mustang', year: '2019' },
      { brand: 'ford', model: 'explorer', year: '2020' },
      { brand: 'bmw', model: 'x7', year: '2020' },
    ]
    const result = makeTallyByProperty(arr, 'brand')
    expect(arr.length).toBeTruthy()
    expect(result.length).toBeFalsy()
    expect(result.audi).toEqual(2)
    expect(result.ford).toEqual(2)
    expect(result.bmw).toEqual(1)
  })
});
