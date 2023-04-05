/**
 * @jest-environment jsdom
 */
import { isFocused } from "@dom";

describe('isFocused()', () => {
  test('returns false when element not in focus', () => {
    const button = document.createElement('button')
    button.blur()
    expect(isFocused(button)).toBe(false);
  });
});
