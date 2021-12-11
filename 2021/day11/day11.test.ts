import { func1, func2 } from './day11';
import { testInput, input } from './day11.input';

describe('day11', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(1656);
      expect(func1(input)).toBe(1741);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(195);
      expect(func2(input)).toBe(440);
    });
  });
});