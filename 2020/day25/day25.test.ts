import { func1, func2 } from './day25';
import { testInput, input } from './day25.input';

describe('day25', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(14897079);
      expect(func1(input)).toBe(2947148);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(undefined);
      expect(func2(input)).toBe(undefined);
    });
  });
});