/**
 * @jest-environment jsdom
 */

import { getSiblings } from "@dom";

describe('getSiblings()', () => {
  test('returns siblings of given element', () => {
    const div = document.createElement('div');
    const button = document.createElement('button')
    const input = document.createElement('input')

    div.appendChild(button)
    div.appendChild(input)
    console.log(getSiblings(button))

    const siblings = getSiblings(button)
    expect(siblings).toBeTruthy()
    expect(siblings).toEqual([ input ])
  })
});
