import { func1, func2 } from './day10';
import { testInput, input } from './day10.input';

describe('day10', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(26397);
      expect(func1(input)).toBe(462693);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(288957);
      expect(func2(input)).toBe(3094671161);
    });
  });
});