import { func1, func2 } from './day20';
import { testInput, input } from './day20.input';

describe('day20', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(20899048083289);
      expect(func1(input)).toBe(20033377297069);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(273);
      expect(func2(input)).toBe(undefined);
    });
  });
});