import { func1, func2 } from './day18';
import { testInput, input } from './day18.input';

describe('day18', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1('2 * 3 + (4 * 5)')).toBe(26);
      expect(func1('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toBe(437);
      expect(func1(testInput)).toBe(12240);
      expect(func1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")).toBe(13632);
      expect(func1(input)).toBe(undefined);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(undefined);
      expect(func2(input)).toBe(undefined);
    });
  });
});