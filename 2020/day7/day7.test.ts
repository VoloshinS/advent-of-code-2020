const { test, expect } = require("@jest/globals");

import { sumOfColorsContainingSelectedColor, countBagsInSelectedBag } from './day7';
import { testInput, testInput2, input } from './day7.input';

describe('Day 7 puzzles', () => {
  describe('#sumOfColorsContainingSelectedColor', () => {
    test('should work as expected', () => {
      expect(sumOfColorsContainingSelectedColor(testInput)).toBe(4);
      expect(sumOfColorsContainingSelectedColor(input)).toBe(185);
    });
  });

  describe('#countBagsInSelectedBag', () => {
    test('should work as expected', () => {
      expect(countBagsInSelectedBag(testInput)).toBe(32);
      expect(countBagsInSelectedBag(testInput2)).toBe(126);
      expect(countBagsInSelectedBag(input)).toBe(89084);
    });
  });
});