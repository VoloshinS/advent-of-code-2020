import { func1, func2 } from './day2';
import { testInput, testInput1, input } from './day2.input';

describe('day2', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(18);
      expect(func1(input)).toBe(42299);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput1)).toBe(9);
      expect(func2(input)).toBe(277);
    });
  });
});