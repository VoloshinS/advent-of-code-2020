import { find2020sumTwoEntries, find2020sumThreeEntries } from './day1';
import { testInput, input } from './day1.input';

describe('find2020sumTwoEntries', () => {
  test('should find proper multiply of TWO numbers, sum of which equals 2020', () => {
    expect(find2020sumTwoEntries(testInput)).toBe(514579);
    expect(find2020sumTwoEntries(input)).toBe(211899);
  });
});

describe('find2020sumThreeEntries', () => {
  test('should find proper multiply of THREE numbers, sum of which equals 2020', () => {
    expect(find2020sumThreeEntries(testInput)).toBe(241861950);
    expect(find2020sumThreeEntries(input)).toBe(275765682);
  });
});