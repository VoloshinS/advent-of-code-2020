import { func1, func2 } from './day18';
import { testInput, input } from './day18.input';

describe('day18', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1('1 + (2 * 3) + (4 * (5 + 6))')).toBe(51);
      expect(func1('2 * 3 + (4 * 5)')).toBe(26);
      expect(func1('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toBe(437);
      expect(func1(testInput)).toBe(12240);
      expect(func1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")).toBe(13632);
      expect(func1(input)).toBe(6640667297513);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2('1 + (2 * 3) + (4 * (5 + 6))')).toBe(51);
      expect(func2('2 * 3 + (4 * 5)')).toBe(46);
      expect(func2('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toBe(1445);
      expect(func2(testInput)).toBe(669060);
      expect(func2("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")).toBe(23340);
      expect(func2(input)).toBe(451589894841552);
    });
  });
});