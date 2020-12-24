import { func1, func2 } from './day24';
import { testInput, input } from './day24.input';

describe('day24', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput, 8)).toBe(10);
      expect(func1(input)).toBe(538);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput, 102)).toBe(2208);
      expect(func2(input, 142)).toBe(4259);
    });
  });
});