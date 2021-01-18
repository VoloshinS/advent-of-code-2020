import { func1, func2 } from './day6';
import { testInput, input } from './day6.input';

describe('day6', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(5);
      expect(func1(input)).toBe(6681);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(4);
      expect(func2(input)).toBe(2392);
    });
  });
});