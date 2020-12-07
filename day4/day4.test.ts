import { countValidPassports, validationRules } from './day4';
import { testInput, input, testInput2Invalid, testInput2Valid } from './day4.input';

describe('countValidPassports', () => {
  test('should count valid passwords if fields are required', () => {
    expect(countValidPassports(testInput)).toBe(2);
    expect(countValidPassports(input)).toBe(208);
  });

  test('should count valid passwords with complex validation rules', () => {
    expect(countValidPassports(testInput, validationRules)).toBe(2);
    expect(countValidPassports(testInput2Invalid, validationRules)).toBe(0);
    expect(countValidPassports(testInput2Valid, validationRules)).toBe(4);
    expect(countValidPassports(input, validationRules)).toBe(167);
  });
});