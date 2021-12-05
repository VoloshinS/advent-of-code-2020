import { func1, func2 } from './day5';
import { testInput, input } from './day5.input';

describe('day5', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(5);
      expect(func1(input)).toBe(5084);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(12);
      expect(func2(input)).toBe(17882);
    });
  });
});