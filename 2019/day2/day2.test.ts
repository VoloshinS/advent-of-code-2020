import { executeOpcodes, guessInputValues } from './day2';
import { testInput, input } from './day2.input';

describe('day2', () => {
  describe('executeOpcodes', () => {
    test('should work as expected', () => {
      expect(executeOpcodes(testInput)).toBe(3100);

      expect(executeOpcodes(input)).toBe(3790689);
    });
  });

  describe('guessInputValues', () => {
    test('should work as expected', () => {
      expect(guessInputValues(testInput, 3500)).toBe(1009);
      expect(guessInputValues(input)).toBe(6533);
    });
  });
});