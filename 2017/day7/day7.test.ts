import { func1, func2 } from './day7';
import { testInput, input } from './day7.input';

describe('day7', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe('tknk');
      expect(func1(input)).toBe('eqgvf');
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(60);
      expect(func2(input)).toBe(757);
    });
  });
});