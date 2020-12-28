import { func1, func2 } from './day5';
import { testInput, input } from './day5.input';

describe('day5', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(10);
      expect(func1(input)).toBe(10368);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(4);
      expect(func2(input)).toBe(4122);
    });
  });
});