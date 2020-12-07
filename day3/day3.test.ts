import { countTrees, countTreesForSlopes } from './day3';
import { testInput, input, slopes, defaultSlope } from './day3.input';

describe('countTrees', () => {
  test('should find proper multiply of TWO numbers, sum of which equals 2020', () => {
    expect(countTrees(testInput, defaultSlope)).toBe(7);
    expect(countTrees(input, defaultSlope)).toBe(286);
  });
});

describe('countTreesForSlopes', () => {
  test('should find proper multiply of THREE numbers, sum of which equals 2020', () => {
    expect(countTreesForSlopes(testInput, slopes)).toBe(336);
    expect(countTreesForSlopes(input, slopes)).toBe(3638606400);
  });
});