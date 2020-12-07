import { getMaxSeat, getEmptySeat } from './day5';
import { testInput, input } from './day5.input';

describe('getMaxSeat', () => {
  test('should find max seat from rage', () => {
    expect(getMaxSeat(testInput)).toBe(820);
    expect(getMaxSeat(input)).toBe(963);
  });
});

describe('getEmptySeat', () => {
  test('should find empty seat', () => {
    expect(getEmptySeat(testInput)).toBe(819);
    expect(getEmptySeat(input)).toBe(592);
  });
});