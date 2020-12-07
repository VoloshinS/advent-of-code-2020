import { findNumberOfValidPasswords, findNumberOfValidPasswords2 } from './day2';
import { testInput, input } from './day2.input';

describe('findNumberOfValidPasswords', () => {
  test('should find number of valid passwords according to provided validation rules', () => {
    expect(findNumberOfValidPasswords(testInput)).toBe(2);
    expect(findNumberOfValidPasswords(input)).toBe(660);
  });
});

describe('findNumberOfValidPasswords2', () => {
  test('should find number of valid passwords according to provided validation rules', () => {
    expect(findNumberOfValidPasswords2(testInput)).toBe(1);
    expect(findNumberOfValidPasswords2(input)).toBe(530);
  });
});