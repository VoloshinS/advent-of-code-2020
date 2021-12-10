const dataPreparator = (str: string) => {
  return str.split('\n').map(l => l.split('x').map(i => parseInt(i)).sort((a, b) => a - b));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((acc, n) => {
    return acc + n[0]*n[1]*3 + n[1]*n[2]*2 + n[2]*n[0]*2;
  }, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((acc, n) => {
    return acc + n[0]*2 + n[1]*2 + n[0]*n[1]*n[2];
  }, 0);
}