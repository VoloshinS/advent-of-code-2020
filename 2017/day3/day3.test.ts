import { func1, func2 } from './day3';
import { testInput, input } from './day3.input';

describe('day3', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1('12')).toBe(3);
      expect(func1('23')).toBe(2);
      expect(func1(testInput)).toBe(31);
      expect(func1(input)).toBe(371);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(undefined);
      expect(func2(input)).toBe(undefined);
    });
  });
});