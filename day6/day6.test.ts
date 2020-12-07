const { test, expect } = require("@jest/globals");

import { sumAnyoneRespondYes, sumEveryoneRespondYes } from './day6';
import { testInput, input } from './day6.input';

describe('day6', () => {
  describe('sumAnyoneRespondYes', () => {
    test('should work as expected', () => {
      expect(sumAnyoneRespondYes(testInput)).toBe(11);
      expect(sumAnyoneRespondYes(input)).toBe(6748);
    });
  });

  describe('sumEveryoneRespondYes', () => {
    test('should work as expected', () => {
      expect(sumEveryoneRespondYes(testInput)).toBe(6);
      expect(sumEveryoneRespondYes(input)).toBe(3445);
    });
  });
});