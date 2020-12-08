import { getProgramResult, getTerminatedProgramResult } from './day8';
import { testInput, input } from './day8.input';

describe('day8', () => {
  describe('getProgramResult', () => {
    test('should work as expected', () => {
      expect(getProgramResult(testInput)).toBe(5);
      expect(getProgramResult(input)).toBe(1475);
    });
  });

  describe('getTerminatedProgramResult', () => {
    test('should work as expected', () => {
      expect(getTerminatedProgramResult(testInput)).toBe(8);
      expect(getTerminatedProgramResult(input)).toBe(1270);
    });
  });
});