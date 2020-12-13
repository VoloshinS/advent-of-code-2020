import { func1, func3, func2 } from './day13';
import { testInput, input } from './day13.input';

describe('day13', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(295);
      expect(func1(input)).toBe(2382);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe(1068781);
      expect(func2('1\n17,x,13,19')).toBe(3417);
      expect(func2('1\n67,7,59,61')).toBe(754018);
      expect(func2('1\n67,x,7,59,61')).toBe(779210);
      expect(func2('1\n67,7,x,59,61')).toBe(1261476);
      expect(func2('1\n67,7,x,59,61')).toBe(1261476);
      expect(func2('1\n1789,37,47,1889')).toBe(1202161486);
      expect(func2(input)).toBe(906332393333683);
    });
  });
});