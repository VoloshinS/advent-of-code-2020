import { getFuelForModule, getFuelForModuleRecursively } from './day1';
import { testInput, input } from './day1.input';

describe('day1', () => {
  describe('getFuelForModule', () => {
    test('should work as expected', () => {
      expect(getFuelForModule(testInput)).toBe(2 + 2 + 654 + 33583);

      expect(getFuelForModule(input)).toBe(3325342);
    });
  });

  describe('getFuelForModuleRecursively', () => {
    test('should work as expected', () => {
      expect(getFuelForModuleRecursively(testInput)).toBe(2 + 2 + 966 + 50346);
      expect(getFuelForModuleRecursively(input)).toBe(4985158);
    });
  });
});