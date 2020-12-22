import { func1, func2 } from './day22';
import { testInput, input } from './day22.input';

describe('day22', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(306);
      expect(func1(input)).toBe(32102);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(291);
      expect(func2(input)).toBe(undefined);
    });
  });
});