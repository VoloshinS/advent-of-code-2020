import { find2021increaseNumber, find2021increaseNumberTriple } from './day1';
import { testInput, input } from './day1.input';

describe('find2021increaseNumber', () => {
  test('should find proper multiply of TWO numbers, sum of which equals 2020', () => {
    expect(find2021increaseNumber(testInput)).toBe(7);
    expect(find2021increaseNumber(input)).toBe(1342);
  });
});

describe('find2021increaseNumberTriple', () => {
  test('should find proper multiply of THREE numbers, sum of which equals 2020', () => {
    expect(find2021increaseNumberTriple(testInput)).toBe(5);
    expect(find2021increaseNumberTriple(input)).toBe(1378);
  });
});