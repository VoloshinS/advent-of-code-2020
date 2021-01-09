import { func1, func2 } from './day4';
import { testInput, testInput1, input } from './day4.input';

describe('day4', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(2);
      expect(func1(input)).toBe(337);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput1)).toBe(3);
      expect(func2(input)).toBe(231);
    });
  });
});