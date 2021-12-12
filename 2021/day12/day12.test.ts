import { func1, func2 } from './day12';
import { testInput, input, testInput1, testInput2 } from './day12.input';

describe('day12', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(10);
      expect(func1(testInput1)).toBe(19);
      expect(func1(testInput2)).toBe(226);
      expect(func1(input)).toBe(5576);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(36);
      expect(func2(testInput1)).toBe(103);
      expect(func2(testInput2)).toBe(3509);
      expect(func2(input)).toBe(152837);
    });
  });
});