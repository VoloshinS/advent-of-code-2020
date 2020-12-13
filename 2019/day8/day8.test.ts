import { func1, func2 } from './day8';
import { testInput, input } from './day8.input';

describe('day8', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1(testInput, 3, 2)).toBe(1);
      expect(func1(input)).toBe(2460);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2(input)).toBe(`
1000011100111101001010010
1000010010100001010010010
1000010010111001100010010
1000011100100001010010010
1000010100100001010010010
1111010010100001001001100
`.trim()); // Answer: "LRFKU" highlight zeros or ones in your editor to see
    });
  });
});