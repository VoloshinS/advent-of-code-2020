import { func1, func2 } from './day12';
import { testInput, input } from './day12.input';

describe('day12', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(25);
      expect(func1(input)).toBe(1687);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(286);
      expect(func2(input)).toBe(20873);
    });
  });
});