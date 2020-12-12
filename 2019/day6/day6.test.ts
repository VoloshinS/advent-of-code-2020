import { func1, func2 } from './day6';
import { testInput, testInput2, input } from './day6.input';

describe('day6', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(42);
      expect(func1(input)).toBe(251208);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {

      expect(func2(testInput2)).toBe(4);
      expect(func2(input)).toBe(397);
    });
  });
});