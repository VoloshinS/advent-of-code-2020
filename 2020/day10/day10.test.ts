import { func1, func2 } from './day10';
import { testInput, input, testInput2 } from './day10.input';

describe('day10', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(35);
      expect(func1(testInput2)).toBe(220);
      expect(func1(input)).toBe(2400);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(8);
      expect(func2(testInput2)).toBe(19208);
      expect(func2(input)).toBe(338510590509056);
    });
  });
});