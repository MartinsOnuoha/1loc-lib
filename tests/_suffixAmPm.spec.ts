import { suffixAmPm } from "@array";

describe('suffixAmPm()', (): void => {
  test('adds am or pm suffix to hour', (): void => {
    expect(suffixAmPm(11)).toEqual('11am')
  });
});
