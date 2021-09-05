import { groupByKey } from "../src";
import { AnyObject } from "../src/@types";

describe('groupByKey()', (): void => {
  test('returns a grouped object when provided array', (): void => {
    const arr: Array<AnyObject> = [
      { brand: 'audi', model: 'q8', year: '2019' },
      { brand: 'audi', model: 'rs7', year: '2020' },
      { brand: 'ford', model: 'mustang', year: '2019' },
      { brand: 'ford', model: 'explorer', year: '2020' },
      { brand: 'bmw', model: 'x7', year: '2020' },
    ]
    const result = groupByKey(arr, 'brand')

    expect(result.length).toBeUndefined()
    expect(result.audi).toBeTruthy()
    expect(result.audi.length).toBeTruthy()
    expect(result.ford).toBeTruthy()
    expect(result.ford.length).toBeTruthy()
    expect(result.bmw).toBeTruthy()
    expect(result.bmw.length).toBeTruthy()
  });
});
