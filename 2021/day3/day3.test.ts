import { func1, func2 } from './day3';
import { testInput, input } from './day3.input';

describe('day3', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(198);
      expect(func1(input)).toBe(3895776);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(230);
      expect(func2(input)).toBe(7928162);
    });
  });
});