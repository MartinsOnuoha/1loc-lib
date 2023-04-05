/**
 * @jest-environment jsdom
 */

import { isMacBrowser } from "@dom";

describe('isMacBrowser()', () => {
  test('returns false if not mac browser', () => {
    expect(isMacBrowser()).toBe(false)
  })
});
