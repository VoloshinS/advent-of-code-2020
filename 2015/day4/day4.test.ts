import { func1, func2 } from './day4';
import { testInput, input } from './day4.input';

describe('day4', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(609043);
      expect(func1(input)).toBe(254575);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(6742839);
      expect(func2(input)).toBe(1038736);
    });
  });
});