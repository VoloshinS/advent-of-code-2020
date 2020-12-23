import { func1, func2 } from './day23';
import { testInput, input } from './day23.input';

describe('day23', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe('67384529');
      expect(func1(input)).toBe('24987653');
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(undefined);
      expect(func2(input)).toBe(undefined);
    });
  });
});