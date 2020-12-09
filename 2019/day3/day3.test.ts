import { getDistanceToClosestIntersection, getWiresLengthToFirstIntersection } from './day3';
import { testInput, testInput2, input, testInput3 } from './day3.input';

describe('day3', () => {
  describe('getDistanceToClosestIntersection', () => {
    test('should work as expected', () => {
      expect(getDistanceToClosestIntersection(testInput)).toBe(6);
      expect(getDistanceToClosestIntersection(testInput2)).toBe(159); // 170??
      expect(getDistanceToClosestIntersection(testInput3)).toBe(135);
      expect(getDistanceToClosestIntersection(input)).toBe(1195);
    });
  });

  describe('getWiresLengthToFirstIntersection', () => {
    test('should work as expected', () => {
      expect(getWiresLengthToFirstIntersection(testInput)).toBe(30);
      expect(getWiresLengthToFirstIntersection(testInput2)).toBe(610);
      expect(getWiresLengthToFirstIntersection(testInput3)).toBe(410);
      expect(getWiresLengthToFirstIntersection(input)).toBe(91518);
    });
  });
});