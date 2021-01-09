import { func1, func2 } from './day5';
import { testInput, input } from './day5.input';

describe('day5', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(5);
      expect(func1(input)).toBe(342669);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(10);
      expect(func2(input)).toBe(25136209);
    });
  });
});