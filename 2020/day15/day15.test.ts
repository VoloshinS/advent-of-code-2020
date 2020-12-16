import { func1, func2 } from './day15';
import { testInput, input } from './day15.input';

describe('day15', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(436);
      expect(func1(input)).toBe(870);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(175594);
      expect(func2(input)).toBe(9136);
    });
  });
});