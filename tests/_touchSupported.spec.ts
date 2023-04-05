/**
 * @jest-environment jsdom
 */
 import { touchSupported } from "@dom";

 describe('touchSupported()', (): void => {
   test('returns false if touch not supported', (): void => {
     expect(touchSupported()).toBe(false)
   });
 })
