import { func1, func2 } from './day9';
import { testInput, input } from './day9.input';

describe('day9', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(15);
      expect(func1(input)).toBe(439);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(1134);
      expect(func2(input)).toBe(900900);
    });
  });
});