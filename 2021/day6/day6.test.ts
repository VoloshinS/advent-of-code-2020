import { func1, func2 } from './day6';
import { testInput, input } from './day6.input';

describe('day6', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(5934);
      expect(func1(input)).toBe(366057);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(26984457539);
      expect(func2(input)).toBe(undefined);
    });
  });
});