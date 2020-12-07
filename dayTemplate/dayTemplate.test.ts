import { func1, func2 } from './dayTemplate';
import { testInput, input } from './dayTemplate.input';

describe('dayTemplate', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(undefined);
      expect(func1(input)).toBe(undefined);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(undefined);
      expect(func2(input)).toBe(undefined);
    });
  });
});