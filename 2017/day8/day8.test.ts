import { func1, func2 } from './day8';
import { testInput, input } from './day8.input';

describe('day8', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(1);
      expect(func1(input)).toBe(5102);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(10);
      expect(func2(input)).toBe(6056);
    });
  });
});