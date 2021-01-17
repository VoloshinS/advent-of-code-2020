import { func1, func2 } from './day9';
import { input } from './day9.input';

describe('day9', () => {
  describe('func1', () => {
    test('should work as expected', () => {
      expect(func1('{}')).toBe(1);
      expect(func1('{{{}}}')).toBe(6);
      expect(func1('{{},{}}')).toBe(5);
      expect(func1('{{{},{},{{}}}}')).toBe(16);
      expect(func1('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9);
      expect(func1('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3);
      expect(func1(input)).toBe(9662);
    });
  });

  describe('func2', () => {
    test('should work as expected', () => {
      expect(func2('<>')).toBe(0);
      expect(func2('<random characters>')).toBe(17);
      expect(func2('<<<<>')).toBe(3);
      expect(func2('<{o"i!a,<{i<a>')).toBe(10);
      expect(func2(input)).toBe(4903);
    });
  });
});