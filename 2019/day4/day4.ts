type DuplicateRule = (value: number, index: number, passwordArr: number[]) => boolean;

const dataPreparator = (str: string): number[] => {
  return str.split('-').map(a => parseInt(a)) ;
};

const defaultDuplicateRule: DuplicateRule = (v, i, arr) => v === arr[i - 1];

// Puzzle 1
export const func1 = (input: string, duplicationRule = defaultDuplicateRule) => {
  const [start, end] = dataPreparator(input);
  let countPasswords = 0;
  for (let i = start; i < end; i++) {
    const password = i + '';
    const passwordArr = password.split('').map(e => parseInt(e));
    const sorted = [...passwordArr].sort().join('');

    const hasDuplications = passwordArr.reduce((res, n, i) => {
      if (res) return res;

      return duplicationRule(n, i, passwordArr);
    }, false);
    
    if (password === sorted && hasDuplications) {
      countPasswords++;
    }
  }

  return countPasswords;
}

// Puzzle 2
export const func2 = (input: string) => {
  const duplicateRule: DuplicateRule = (v, i, arr) =>
    v === arr[i - 1] && v !== arr[i - 2] && v !== arr[i + 1];
  
  return func1(input, duplicateRule);
}