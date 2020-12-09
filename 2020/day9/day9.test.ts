import { findInvalidNumber, findContiguousRangeMaxMinSum } from './day9';
import { testInput, input } from './day9.input';

describe('day9', () => {
  describe('findInvalidNumber', () => {
    test('should work as expected', () => {
      expect(findInvalidNumber(testInput)).toBe(127);
      expect(findInvalidNumber(input, 25)).toBe(1212510616);
    });
  });

  describe('findContiguousRangeMaxMinSum', () => {
    test('should work as expected', () => {
      expect(findContiguousRangeMaxMinSum(testInput)).toBe(62);
      expect(findContiguousRangeMaxMinSum(input, 25)).toBe(171265123);
    });
  });
});