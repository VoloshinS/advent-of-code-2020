import { func1, func2 } from './day7';
import { testInput, input } from './day7.input';

describe('day7', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(37);
      expect(func1(input)).toBe(343605);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(168);
      expect(func2(input)).toBe(96744904);
    });
  });
});