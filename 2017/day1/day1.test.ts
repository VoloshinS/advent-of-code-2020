import { func1, func2 } from './day1';
import { testInput, input } from './day1.input';

describe('day1', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(9);
      expect(func1(input)).toBe(1216);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2('123123')).toBe(12);
      expect(func2('12131415')).toBe(4);
      expect(func2('123425')).toBe(4);
      expect(func2(input)).toBe(1072);
    });
  });
});