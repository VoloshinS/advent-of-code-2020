import { func1, func2 } from './day1';
import { testInput, input } from './day1.input';

describe('day1', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(4);
      expect(func1(input)).toBe(538);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(5);
      expect(func2(input)).toBe(77271);
    });
  });
});