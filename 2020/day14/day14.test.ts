import { func1, func2 } from './day14';
import { testInput, input, testInput2 } from './day14.input';

describe('day14', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(165);
      expect(func1(input)).toBe(5875750429995);
    });
  });

  describe('func2', () => {
    test.skip('should work as expected', () => {
      expect(func2(testInput2)).toBe(208);
      expect(func2(input)).toBe(undefined);
    });
  });
});