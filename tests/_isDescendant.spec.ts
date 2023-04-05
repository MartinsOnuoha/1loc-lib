/**
 * @jest-environment jsdom
 */
import { isDescendant } from "@dom";

describe('isDescendant()', (): void => {
  test('returns true for descendant', (): void => {
    const parent = document.createElement('div')
    const child = document.createElement('span')
    parent.appendChild(child)

    expect(isDescendant(child, parent)).toBe(true)
  });
  test('returns false for non-descendant', (): void => {
    const parent = document.createElement('div')
    const child = document.createElement('span')

    expect(isDescendant(child, parent)).toBe(false)
  })
})
