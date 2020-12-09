const dataPreparator = (str: string): number[] => {
  return str.split('\n').map(i => parseInt(i));
};

const isValid = (preamble: number[], value: number): boolean =>
  preamble.reduce((res: boolean, n: number) => {
    if (res) return res;

    for (let i = 0; i < preamble.length; i++) {
      res = preamble[i] + n === value;
      if (res) break;
    }

    return res;
  }, false);

// Puzzle 1
export const findInvalidNumber = (input: string, preambleSize = 5) => {
  const prepared = dataPreparator(input);

  return prepared.slice(preambleSize)
    .reduce((res, el, i) => {
      if (res) return res;

      return isValid(prepared.slice(i, i + preambleSize), el) ? null : el;
    }, null);
}

// Puzzle 2
export const findContiguousRangeMaxMinSum = (input: string, size = 5): number => {
  const prepared = dataPreparator(input);
  const invalidNumber = findInvalidNumber(input, size);

  return prepared.reduce((res, n, index) => {
    if(res) return res;

    let sum = 0;

    for (let i = index; i < prepared.length; i++) {
      sum = sum + prepared[i];
      if (sum === invalidNumber) {
        const contiguousRange = prepared.slice(index, i);
        res = Math.min(...contiguousRange) + Math.max(...contiguousRange);
      }

      if (res || sum > invalidNumber) break;
    }
    return res;
  }, null);
}