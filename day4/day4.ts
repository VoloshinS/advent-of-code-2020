import { required, rangeValidator, heightValidator, regexValidator, oneOfValidator } from './day4.utils';

const defaultValidationRules = [
  { name: 'byr', validate: required },
  { name: 'iyr', validate: required },
  { name: 'eyr', validate: required },
  { name: 'hgt', validate: required },
  { name: 'hcl', validate: required },
  { name: 'ecl', validate: required },
  { name: 'pid', validate: required }
];

export const validationRules = [
  { name: 'byr', validate: rangeValidator(1920, 2002) },
  { name: 'iyr', validate: rangeValidator(2010, 2020) },
  { name: 'eyr', validate: rangeValidator(2020, 2030) },
  { name: 'hgt', validate: heightValidator({ cm: [150, 193], in: [59, 76] }) },
  { name: 'hcl', validate: regexValidator(/^#([0-9]|[a-f]){6}$/) },
  { name: 'ecl', validate: oneOfValidator(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']) },
  { name: 'pid', validate: regexValidator(/^\d{9}$/) }
]

const dataPreparator = (str: string): {[field: string]: string}[] => {
  return str
    .split('\n\n')
    .map(p => p.replace(/\n/g, ' ').split(' ').reduce((passportFields, nextKeyValue) => {
      const [field, value] = nextKeyValue.split(':');
      passportFields[field] = value;

      return passportFields;
    }, {}));
};

// Puzzle 1
// Find number of valid passports according to requirements 1
export const countValidPassports = (input: string, validationRules = defaultValidationRules) => {
  const prepared = dataPreparator(input);
  const invalid = prepared.filter((passportFields) =>
    validationRules.some(f => !f.validate(passportFields[f.name]))
  );

  return prepared.length - invalid.length;
}

// Puzzle 2
// Find number of valid passports according to requirements 2
export const countValidPassports2 = (input: string) => {
  return countValidPassports(input, validationRules);
}
