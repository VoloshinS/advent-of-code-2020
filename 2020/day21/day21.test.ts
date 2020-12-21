import { func1, func2 } from './day21';
import { testInput, input } from './day21.input';

describe('day21', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput)).toBe(5);
      expect(func1(input)).toBe(2072);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(testInput)).toBe('mxmxvkd,sqjhc,fvjkl');
      expect(func2(input)).toBe('fdsfpg,jmvxx,lkv,cbzcgvc,kfgln,pqqks,pqrvc,lclnj');
    });
  });
});