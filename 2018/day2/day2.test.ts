import { func1, func2 } from './day2';
import { testInput, testInput2, input } from './day2.input';

describe('day2', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(12);
      expect(func1(input)).toBe(5434);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput2)).toBe('fgij');
      expect(func2(input)).toBe('agimdjvlhedpsyoqfzuknpjwt');
    });
  });
});