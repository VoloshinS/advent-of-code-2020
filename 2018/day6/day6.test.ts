import { func1, func2 } from './day6';
import { testInput, input } from './day6.input';

describe('day6', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(17);
      expect(func1(input)).toBe(3449);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput, 32)).toBe(16);
      expect(func2(input, 10000)).toBe(44868);
    });
  });
});