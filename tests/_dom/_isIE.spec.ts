/**
 * @jest-environment jsdom
 */

import { isIE } from "@dom";

describe('isIE()', () => {
  test('returns false if not IE', () => {
    expect(isIE()).toBe(false)
  })
});
