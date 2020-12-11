import { func1, func2 } from './day11';
import { testInput, input } from './day11.input';

describe('day11', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(37);
      expect(func1(input)).toBe(2178);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(26);
      expect(func2(input)).toBe(1978);
    });
  });
});