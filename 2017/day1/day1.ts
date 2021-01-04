const dataPreparator = (str: string) => {
  return str.split('').map(a => +a);
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const toSum = prepared.concat(prepared[0]);
  return toSum.reduce((res, m, i) => {
    return res + (m === toSum[i + 1] ? m : 0);
  }, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const toSum = prepared.concat(prepared);

  return toSum.reduce((res, m, i) => {
    if (i >= prepared.length) return res;
    return res + (m === toSum[i + prepared.length / 2] ? m : 0);
  }, 0);
}