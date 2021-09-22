/**
 * @jest-environment jsdom
 */
 import { getSelectedText } from "@dom";

 describe('getSelectedText()', () => {
   test('returns selected text', () => {
    //  TODO: proper test
     const input: HTMLInputElement = document.createElement('input')
     input.value = 'How are you?'
     input.focus()
     input.select()
     expect(getSelectedText()).toEqual('');
   });
 });
