import { func1, func2 } from './day5';
import { testInput, input } from './day5.input';

describe('day5', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1('3,0,4,0,99,22', 20)).toBe(20)
      expect(func1(input, 1)).toBe(10987514);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2('3,9,8,9,10,9,4,9,99,-1,8', 8)).toBe(1);
      expect(func2('3,9,8,9,10,9,4,9,99,-1,8', 9)).toBe(0);
      expect(func2('3,9,7,9,10,9,4,9,99,-1,8', 7)).toBe(1);
      expect(func2('3,9,7,9,10,9,4,9,99,-1,8', 9)).toBe(0);

      expect(func2('3,3,1108,-1,8,3,4,3,99', 8)).toBe(1);
      expect(func2('3,3,1108,-1,8,3,4,3,99', 9)).toBe(0);
      expect(func2('3,3,1107,-1,8,3,4,3,99', 7)).toBe(1);
      expect(func2('3,3,1107,-1,8,3,4,3,99', 9)).toBe(0);

      expect(func2('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9', 0)).toBe(0);
      expect(func2('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9', 1)).toBe(1);

      expect(func2(testInput, 1)).toBe(999);
      expect(func2(testInput, 8)).toBe(1000);
      expect(func2(testInput, 9)).toBe(1001);
      
      expect(func2(input, 5)).toBe(14195011);
    });
  });
});