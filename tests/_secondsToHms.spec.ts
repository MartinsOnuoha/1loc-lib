import { secondsToHms } from "@array";

describe('secondsToHms()', () => {
  test('Convert seconds to hh:mm:ss format', (): void => {
    expect(secondsToHms(200)).toEqual('00:03:20')
  })
});
