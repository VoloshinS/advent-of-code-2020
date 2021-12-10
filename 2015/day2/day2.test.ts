import { func1, func2 } from './day2';
import { testInput, input } from './day2.input';

describe('day2', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(101);
      expect(func1(input)).toBe(1598415);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(48);
      expect(func2(input)).toBe(3812909);
    });
  });
});