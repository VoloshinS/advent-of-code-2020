import { func1, func2 } from './day16';
import { testInput, input } from './day16.input';

describe('day16', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(71);
      expect(func1(input)).toBe(24980);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(input)).toBe(809376774329);
    });
  });
});